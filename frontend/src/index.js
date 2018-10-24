import React from 'react';
import ReactDOM from 'react-dom';
import Root from './root';
import * as serviceWorker from './serviceWorker';
import configureStore from './store/store';

const store = configureStore({});
window.dispatch = store.dispatch;
window.getState = store.getState;

document.addEventListener('DOMContentLoaded', () => {
    
    ReactDOM.render(<Root store={store} />, document.getElementById('root'));
})

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
