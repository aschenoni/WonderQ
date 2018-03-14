import expect from 'expect';
import Queue from '../Queue.js';

describe('MOCK DB -- Queue class', function(){
	it('create a queue', function(){
		expect(new Queue()).toBeDefined();
	});

	it('adds an item to an empty queue', function(){
		let queue = new Queue();
		queue.push(1);
		expect(queue.queue).toEqual([1]);
	});

	it('adds an item to a non-empty queue', function(){
		let queue = new Queue();
		queue.push(1);
		queue.push(2);
		expect(queue.queue).toEqual([1,2]);
	});

	it('pops an item from a queue with size 1', function(){
		let queue = new Queue();
		queue.push(1);
		let popped = queue.pop();
		expect(popped).toEqual(1);
		expect(queue.queue).toEqual([]);
	});

	it('pops an item from a queue with size > 1', function (){
		let queue = new Queue();
		queue.push(1);
		queue.push(2);
		let popped = queue.pop();
		expect(popped).toEqual(1);
		expect(queue.queue).toEqual([2]);
	});

	it('allows fluent interface for pushing elements to the queue', function(){
		let queue = new Queue();
		queue.push(1).push(2);
		expect(queue.queue).toEqual([1,2]);
	});
});