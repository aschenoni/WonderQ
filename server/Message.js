export default class Message {
	constructor(text, author){
		this.text = text;
		this.priority = 0;
		this.author = author;
	}

	upPriority(){
		this.priority++;
	}
}