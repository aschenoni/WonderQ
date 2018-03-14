import DB from './DB';

const db = new DB();

db
	.createList(0)
	.createList('InProcess')
	.createList('Done')
	.default(0);
export default db;