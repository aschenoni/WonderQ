import * as types from '../actions/actionTypes';

const initialState = {
	status: types.SOCKET_IO_DISCONNECTED,
	message: null,
	progress: 0
}

const wsReducer = (state = initialState, action) => {
	switch (action.type) {
		case types.SOCKET_IO_CONNECTING :
			return {status: types.SOCKET_IO_CONNECTING}
		case types.SOCKET_IO_CONNECT :
			return {status: types.SOCKET_IO_CONNECT}
		case types.SOCKET_IO_CONNECTED :
			return {status: types.SOCKET_IO_CONNECTED}
		case types.SOCKET_IO_DISCONNECT :
			return {status: types.SOCKET_IO_DISCONNECT}
		case types.SOCKET_IO_DISCONNECTED :
			return {status: types.SOCKET_IO_DISCONNECTED}
		case types.SOCKET_IO_EMIT :
			return {status: types.SOCKET_IO_EMIT,
message: action}
		default:
			return state;
	}
}

export default wsReducer;
