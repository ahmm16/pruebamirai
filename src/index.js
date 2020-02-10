import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import App from './App';
import createRootReducer from "./reducers";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import { routerMiddleware, ConnectedRouter } from "connected-react-router";
import { createBrowserHistory } from "history";
const history = createBrowserHistory();

const store = createStore(
    createRootReducer(history),
    applyMiddleware(thunk, routerMiddleware(history))
);
ReactDOM.render(
    <Provider store={store}>
        <ConnectedRouter history={history}>
            <App />
        </ConnectedRouter>
    </Provider>, document.getElementById('root'));

serviceWorker.unregister();
