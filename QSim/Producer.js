import request from 'request-promise-native';
import config from '../config';

let index = 0;

export default class Producer {
	constructor(productionUrl){
		this.productionUrl = productionUrl;
		this.productionRate = (1000 * 60) / config.PRODUCTION_RATE;
		this.productionCount = 0;
		this.productionIds = [];
		this.isStarted = false;
		this.producerId = this.generateId(); //create a mock id to mimic auth / identification in requests
		console.log(`Creating Producer ${this.producerId} production: 1 tick per ${this.productionRate / 1000}s`);
	}

	produce(){
		this.productionCount++;
		let options = {
			url: 'http://localhost:3000/message/', 
			method: 'POST', json: {message: this.generateMessage()}, 
			headers: {producerId: this.producerId} 
		};

		request(options)
			.then((res)=>console.log(`Message Produced: ${res}`))
			.catch((err)=>console.log(err));

	}

	start(){
		if(!this.isStarted){
			this.isStarted = true;
			this.productionIds.push(setInterval(this.produce.bind(this), this.productionRate));
		}
	}

	stop(){
		this.isStarted = false;
		this.productionIds.forEach(id => clearInterval(id));
	}

	generateMessage() {
		return Math.random().toString(36).substring(2)
	}

	generateId(){
		return `P_${index++}`;
	}
}