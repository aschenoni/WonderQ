import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import {createLogger} from 'redux-logger';
import reducers from '../reducers/rootReducer';
import socketware from '../middleware/socket-io';
const middleware = [thunk, createLogger(), socketware];

const createStoreWithMiddleware = applyMiddleware(...middleware)(createStore);

export function makeStore() {
  return createStoreWithMiddleware(reducers);
}
