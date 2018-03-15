//Class used to alert the server when the expiration time is up on a certain messages process time
import db from '../mockDB';

export default class Snitch {
	constructor(expirationTime){
		this.expirationTime = expirationTime * 1000;
		this.messages = {};
	}

	register(message) {
		this.messages[message.id] = waitForExpiration.apply(this, [message]);

		async function waitForExpiration(message){
			let result = await resolveAfterExpiration(this.expirationTime);
			this.expire(message);
		}

		function resolveAfterExpiration(expirationTime) {
		  return new Promise(resolve => {
		    setTimeout(() => {
		      resolve('resolved');
		    }, expirationTime );
		  }).catch((err)=>console.log(err));
		}
	}

	deregister(id){
		delete this.messages[id];
	}

	expire(message){
		if(this.messages[message.id]){
			console.log(`Message ${message.id} has expired!`);
			let poppedNode = db.popById(message.id, 'InProcess');
			if(poppedNode){
				delete poppedNode.consumer
				poppedNode.payload.upPriority();
				db.push(poppedNode);
			}
		}
	}

	//TODO
}