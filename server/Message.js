export default class Message {
	constructor(text){
		this.text = text;
		this.priority = 0;
	}

	upPriority(){
		this.priority++;
	}
}