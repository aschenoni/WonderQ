import request from 'request-promise-native';
import config from '../config';

let index = 0; //closure for id purposes

export default class Consumer {
	
	constructor(consumptionUrl, doneUrl){
		this.consumptionUrl = consumptionUrl;
		this.doneUrl = doneUrl;
		this.consumptionRate = (1000 * 60) / config.CONSUMPTION_RATE;
		this.processRate = (1000 * 60) / config.PROCESS_RATE;
		this.failureRate = config.CONSUMER_PROCESS_FAILURE_RATE;
		this.consumptionCount = 0;
		this.consumptionIds = [];
		this.isStarted = false;
		this.consumerId = this.generateId(); //create a mock id to mimic auth / identification in requests
		console.log(`Creating Consumer ${this.consumerId} consumption: 1 tick per ${this.consumptionRate / 1000}s, process: ${1 - this.failureRate} success rate`);
	}

	consume(){
		request({url: this.consumptionUrl, headers: {consumerid: this.consumerId}})
			.then(this.processMessage.bind(this))
			.catch(err => console.log(err));

		this.consumptionCount++;
		console.log(`consumption: ${this.consumptionCount} ${this.consumptionRate}`);

		// this.consumptionId = setInterval(this.consume, this.consumptionRate);
	}

	processMessage(message){
		message = JSON.parse(message);
		console.log('MESSAGE', message, message.id);
		if(Math.random() > this.failureRate){ //Success!
			request({url: `${this.doneUrl}${message.id}`, method: 'POST', headers: {consumerid: this.consumerId}})
				.then(res => console.log(`${message.id} passed`))
				.catch(err => console.log(`err`));

		} else {
			console.log(`${message.id} failed`);
		}
	}

	start(){
		if(!this.isStarted){ //only start once
			this.isStarted = true;
			this.consumptionIds.push(setInterval(this.consume.bind(this), this.consumptionRate));
		}
	}

	stop(){
		this.consumptionIds.forEach(id => clearInterval(id));
		this.isStarted = false;
	}

	generateId(){
		return `C_${index++}`;
	}
}