import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import './index.scss';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {Provider} from "react-redux";
import {createStore} from "redux";

import rootReducer from './reducers'
import {loadState, saveSate} from "./localStorage";
// import the library
import {library} from '@fortawesome/fontawesome-svg-core';

// import your icons
import {faUndo, faRedo} from '@fortawesome/free-solid-svg-icons';

const persistedState = loadState();
const store = createStore(rootReducer, persistedState);
store.subscribe(() => {
    saveSate(store.getState());
});

library.add(
    faUndo,
    faRedo
);
ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.register();
