import request from 'request-promise-native';
import config from '../config';

let index = 0; //closure for id purposes

export default class Consumer {
	
	constructor(consumptionUrl, doneUrl){
		this.consumptionUrl = consumptionUrl;
		this.doneUrl = doneUrl;
		this.consumptionRate = (1000 * 60) / config.CONSUMPTION_RATE;
		this.processRate = (1000 * 60) / config.PROCESS_RATE;
		this.consumptionCount = 0;
		this.consumptionIds = [];
		this.consumerId = this.generateId(); //create a mock id to mimic auth / identification in requests
		console.log(`Creating Consumer ${this.consumerId} consumption: 1 tick per ${this.consumptionRate / 1000}s, process: 1 tick per ${this.processRate / 1000}s`);
	}

	consume(){
		this.consumptionCount++;

		console.log(`consumption: ${this.consumptionCount} ${this.consumptionRate}`);

		// this.consumptionId = setInterval(this.consume, this.consumptionRate);
	}

	start(){
		this.consumptionIds.push(setInterval(this.consume.bind(this), this.consumptionRate));
	}

	stop(){
		this.consumptionIds.forEach(id => clearInterval(id));
	}

	generateId(){
		return `C_${index++}`;
	}
}