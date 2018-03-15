import expect from 'expect';
import Message from '../Message';
console.log(Message);
describe('SERVER -- Message', function(){

	it('sets text in the constructor', function(){
		let message = new Message('this is text');
		expect(message).toBeDefined();
	})

	it('sets empty text in the constructor', function(){
		let message = new Message('this is text');
		expect(message.text).toEqual('this is text');
	})

	it('sets text in the constructor', function(){
		let message1 = new Message('');
		expect(message1.text).toEqual('');
		let message2 = new Message();
		expect(message2.text).toBeUndefined();
	})

	it('sets priority in the constructor', function(){
		let message = new Message('this is text');
		expect(message.priority).toEqual(0);
	})

	it('increases priority', function(){
		let message = new Message('this is text');
		expect(message.priority).toEqual(0);
		message.upPriority();
		expect(message.priority).toEqual(1);
	})
});