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
		let node = value instanceof ListNode ? value : new ListNode(value);
		this.lists[list].push(node);
		return this; //allow chaining
	}

	pop(list = this.default){
		return this.lists[list].pop();
	}

	findById(id, list = this.default){
		list = this.lists[list];
		return list.queue.find((item)=> item.id === id);
	}

	popById(id, list = this.default){
		list = this.lists[list];
		let idIndex = list.queue.findIndex((item)=> item.id === id);
		let node = list.queue.splice(idIndex, 1); 
		return node[0];
	}

	// popPushById(id, popFrom, pushTo){

	// }

	//For cases when we need a popped node to push to the front of the list
	priorityPopPush(popFromListName, pushToListName){
		//TODO
	}
}