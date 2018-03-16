import * as types from '../actions/actionTypes';

const initialState = {
	"0": {queue: []},
	"InProcess": {queue: []},
	"Done": {queue: []}
}

const dbReducer = (state = initialState, action) => {
	switch (action.type){
		case types.DB_UPDATE:
			console.log(action.db);
			return action.db.lists;
		default:
			return state;
	}
}

export default dbReducer;