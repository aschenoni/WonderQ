import websocketActionCreators from './websocket';
import dbActionCreators from './db';

const actions = {
	ws: websocketActionCreators,
	db: dbActionCreators 
}

export default actions;