import express from 'express';
import db from '../../mockDB';
import Message from '../Message';

const router = express.Router();

//TODO Authorize consumers only to consume and not to produce 
//TODO Authorize producer only to produce and not to consume
//Doing these auth checks will require splitting these into paths into separate routes most likely


//GET Message -- pushPop a message moving it from 0 list to inProcess list
	//TODO we need to set a timer on this get Message, 
	//if the consumer doesn't respone with GET /Done/:id before expiration time
	//we need to push pop this node back to the from of the list
router.get('/', (req, res)=>{
	res.send(db.pop());
});

//POST Message -- Push a message
router.post('/', (req, res)=>{
	db.push(new Message('this is a test message'));
	res.send(db);
});

//POST Done /:id -- pushPop a message moving it from inProcess list to done list
router.post('/done/:id', (req, res)=>{
	res.send(`ok ${req.params.id}`);
});

export default router;