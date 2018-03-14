import express from 'express';
import db from '../../mockDB';

const router = express.Router();

//TODO Authorize consumers only to consume and not to produce 
//TODO Authorize producer only to produce and not to consume
//Doing these auth checks will require splitting these into paths into separate routes most likely


//GET Message -- pushPop a message moving it from 0 list to inProcess list
	//TODO we need to set a timer on this get Message, 
	//if the consumer doesn't respone with GET /Done/:id before expiration time
	//we need to push pop this node back to the from of the list
router.get('/', (req, res)=>{
	console.log('getting');
	res.send('ok');
});

//POST Message -- Push a message
router.post('/', (req, res)=>{
	console.log(req.body);
	res.send(`ok ${req.body.message}`);
});

//POST Done /:id -- pushPop a message moving it from inProcess list to done list
router.post('/done/:id', (req, res)=>{
	res.send(`ok ${req.params.id}`);
});

export default router;