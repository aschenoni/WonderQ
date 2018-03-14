import Queue from './Queue';
import ListNode from './ListNode';

export default class DB {
	constructor(){
		this.lists = {};
	}

	createList(listName, listType = Queue, isDefault) {
		this.lists[listName] = new listType();
		if(isDefault){
			this.default = listName;
		}
		return this; //allow chaining
	}

	default(newDefaultListName){
		this.default = newDefaultListName;
		return this; //allow chaining
	}

//a better mock db would have these operations be async. maybe TODO
	popPush(popFromListName, pushToListName){
		let poppedNode = this.lists[popFromListName].pop();
		this.lists[pushToListName].push(poppedNode);
		return poppedNode;
	}

	push(value, list = this.default){
		this.lists[list].push(new ListNode(value));
		return this; //allow chaining
	}

	pop(list = this.default){
		return this.lists[list].pop();
	}
}