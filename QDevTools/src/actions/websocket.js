import * as types from './actionTypes';

const websocketActionCreators = {
	connecting(status) {
		return {type: types.SOCKET_IO_CONNECTING,
status};
	},
	connect(status) {
		return {type: types.SOCKET_IO_CONNECT,
status};
	},
	disconnect(status) {
		return {type: types.SOCKET_IO_DISCONNECT,
status};
	},
	connected(status) {
		return {type: types.SOCKET_IO_CONNECTED,
status};
	},
	disconnected(status) {
		return {type: types.SOCKET_IO_DISCONNECTED,
status};
	},
	emit(message) {
		return {type: types.SOCKET_IO_EMIT,
message};
	}
};

export default websocketActionCreators;
