import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { makeStore } from './stores/store';
import actions from './actions/actions';

let store = makeStore();
store.dispatch(actions.ws.connect());
ReactDOM.render(<Provider store={store}>
	<App />
</Provider>, document.getElementById('root'));
registerServiceWorker();
