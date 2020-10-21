import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './app';
import * as serviceWorker from './serviceWorker';
import {Provider} from "react-redux";
import {BrowserRouter} from "react-router-dom";
import {applyMiddleware, combineReducers, createStore} from "redux";
import thunk from "redux-thunk";
import {composeWithDevTools} from 'redux-devtools-extension';
import authReducer from './user/store/authReducer';
import firebaseReducer from './projects/store/projectsAndTasksReducer';
import * as authActionCreators from './user/store/actions';

const rootReducer = combineReducers({
    firebase: firebaseReducer,
    auth: authReducer
});

export const store = createStore(rootReducer, composeWithDevTools(
    applyMiddleware(thunk)
));

store.dispatch(authActionCreators.initUser());

ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <BrowserRouter>
                <App/>
            </BrowserRouter>
        </Provider>
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
