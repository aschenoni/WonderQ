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
	}

	popPush(popFromListName, pushToListName){
		let poppedNode = this.lists[popFromListName].pop();
		this.lists[pushToListName].push(poppedNode);
	}

	default(newDefaultListName){
		this.default = newDefaultListName;
		return this;
	}

	push(value, list = this.default){
		this.lists[list].push(new ListNode(value));
	}

	pop(list = this.default){
		return this.lists[list].pop();
	}
}