import express from 'express';
import db from '../../mockDB';
import Message from '../Message';
import Snitch from '../Snitch';


const router = express.Router();
const snitch = new Snitch(5);

/** TODO Authorize consumers only to consume and not to produce 
* TODO Authorize producer only to produce and not to consume
* Doing these auth checks will require splitting these into paths into separate routes most likely
*/

//GET Message -- popPush a message moving it from 0 list to inProcess list
	//TODO we need to set a timer on this get Message, 
	//if the consumer doesn't respone with GET /Done/:id before expiration time
	//we need to push pop this node back to the from of the list
router.get('/', (req, res)=>{
	let poppedNode = db.popPush(0, 'InProcess');
	poppedNode.consumer = req.headers.consumerid;
	snitch.register(poppedNode);
	res.send(poppedNode);
});

//POST Message -- Push a message
router.post('/', (req, res)=>{
	if(req.body.message){
		db.push(new Message(req.body.message, req.headers.producerid));
		res.sendStatus(200);
	} else {
		res.status(400).send('message is required');
	}
});

//POST Done /:id -- popPush a message moving it from inProcess list to done list
router.post('/done/:id', (req, res)=>{
	let id = Number(req.params.id)
	let node = db.findById(id, 'InProcess');
	// console.log(node.consumer, req.headers.consumerid, node.consumer === req.headers.consumerid); 
	if(node && node.consumer === req.headers.consumerid){
		snitch.deregister(id);
		node = db.popById(id, 'InProcess');
		db.push(node, 'Done');
		res.send(`Done: ${req.params.id}`);
	} else {
		res.sendStatus(401);
	}

});

export default router;