import expect from 'expect';
import ListNode from '../ListNode';

describe('MOCK DB -- ListNode', function(){
	it('exists when instantiated', function(){
		let listNode = new ListNode();
		expect(listNode).toBeDefined();
	});

	it('properly displays an empty payload when no payload is passed', function(){
		let listNode = new ListNode();
		expect(listNode.payload).toBeUndefined();
	});

	it('properly stores a payload when passed on instantiation', function(){
		let listNode = new ListNode(1);
		expect(listNode.payload).toEqual(1);
	});
});