let index = 0; //index closure for generating ids, obviously this is a mock, doesn't persist between sessions

//Very rough mimic of db document level locking mechanism
export default class ListNode {
	constructor(payload){
		this.payload = payload;
		this.locked = false;
		this.id = index++; 
	}

	requestLock() {
		if(!this.locked){
			this.locked = true;
			return this;
		} else {
			return false;
		}
	}

	release(){
		this.locked = false;
	}

	set(payload, cb) {
		if(this.requestLock()){
			this.payload = payload;
			this.release();
			cb();
		} else {
			cb(`Could not update ${this.payload} to ${payload}, the item is currently locked`);
		}
	}

	get() {
		return this.payload;
	}
	//TODO add a delete or some sort of locking READ operation
};