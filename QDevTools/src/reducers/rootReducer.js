import {combineReducers} from 'redux';
import wsReducer from './websocket';

const reducers = combineReducers({
	ws: wsReducer
});

export default reducers;
