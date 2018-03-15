import express from 'express';
import db from '../../mockDB'
const router = express.Router();

router.get('/status', function(req, res){
	res.send(db.lists);
});

router.get('/find/:id/:list?', function(req, res) {
	res.send(db.findById(Number(req.params.id), req.params.list));
});

export default router;