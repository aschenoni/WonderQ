import io from 'socket.io-client';
import * as types from '../actions/actionTypes';
import actions from '../actions/actions';

const socket = io('http://localhost:3003');
console.log(socket);
const socketMiddleware = (() => (store) => (next) => (action) => {
		switch (action.type) {
			case types.SOCKET_IO_CONNECT:
				connectSocketActions();
				break;
			case types.SOCKET_IO_EMIT:
				socket.emit('message', action.message); // catch an emit action so we can send it to server
				break;
			default:
				return next(action);
		}

return next(action);

		function connectSocketActions() {
			socket.on('connect', () => onConnect(socket, store));
			socket.on('disconnect', () => onDisconnect(socket, store));
			socket.on('message', (message) => onMessage(message, socket, store));
			socket.on('broadcast', (message) => onMessage(message, socket, store));

			function onConnect (socket, store) {
				store.dispatch(actions.ws.connected()); // dispatch connect
			}

			function onDisconnect (socket, store) {
				store.dispatch(actions.ws.disconnected()); // dispatch disconnect
			}

			function onMessage (message, socket, store) {
				store.dispatch(actions.db.update(message)); // dispatch message action with message payload
			}
		}

	})();

export default socketMiddleware;
