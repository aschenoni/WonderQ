import expect from 'expect';
import ListNode from '../ListNode';

describe('MOCK DB -- ListNode', function(){
	it('exists when instantiated', function(){
		let listNode = new ListNode();
		expect(listNode).toBeDefined();
	});

	it('displays an empty payload when no payload is passed', function(){
		let listNode = new ListNode();
		expect(listNode.payload).toBeUndefined();
	});

	it('stores a payload when passed on instantiation', function(){
		let listNode = new ListNode(1);
		expect(listNode.payload).toEqual(1);
	});

	it('creates a valid message id to the node when instantiated', function(){
		let listNode = new ListNode(1);
		expect(listNode.id).toBeDefined();
	});

	it('does not create duplicate ids on two different nodes', function(){
		let firstNode = new ListNode('First Node');
		let secondNode = new ListNode('Second Node');
		expect(secondNode.id).toEqual(firstNode.id + 1);
	});

	it('locks correctly when a lock is request', function(){
		let listNode = new ListNode(1);
		let lockedNode = listNode.requestLock();
		expect(lockedNode).toBe(listNode);
		expect(listNode.locked).toBe(true);
		expect(lockedNode.locked).toBe(true);
	});

	it('updates a value correctly', function(){
		//TODO 
	});

	it('blocks the value from being updated while it is locked', function(){
		//TODO
	});
});