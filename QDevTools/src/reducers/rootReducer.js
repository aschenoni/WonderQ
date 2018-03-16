import {combineReducers} from 'redux';
import wsReducer from './websocket';
import dbReducer from './db';
const reducers = combineReducers({
	ws: wsReducer,
	db: dbReducer
});

export default reducers;
