import * as types from './actionTypes';

const dbActionCreators = {
	update(db){
		return {type: types.DB_UPDATE, db}
	}
}

export default dbActionCreators;