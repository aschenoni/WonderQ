//Quick FIFO queue implementation
export default class Queue {
	constructor(){
		this.queue = [];
	}

	push(item){
		this.queue.push(item);
		return this;
	}

	pop(){
		return this.queue.shift();
	}

	//TODO add other queue capabilities, currently its just a reimplementation of array....

}