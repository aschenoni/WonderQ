let index = 0; //index closure for generating ids, obviously this is a mock and doesn't persist between sessions
//use a more robust uuid generation algorithm or even better leverage a DB with this functionality!

//Very rough mimic of db document level locking mechanism
export default class ListNode {
	constructor(payload){
		this.payload = payload;
		this.locked = false;
		this.id = this.generateId();
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

	generateId(){
		return index++;
	}
	//TODO add a delete or some sort of locking READ operation
};