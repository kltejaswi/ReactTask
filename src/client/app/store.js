import { createStore, applyMiddleware } from 'redux';
import { syncHistoryWithStore } from 'react-router-redux';
import { browserHistory } from 'react-router'

import createSagaMiddleware from 'redux-saga'

import rootReducer from './reducers/index.jsx';

const defaultState = {};

const sagaMiddleware = createSagaMiddleware();

const store = createStore(rootReducer, defaultState, applyMiddleware(sagaMiddleware));

export const history = syncHistoryWithStore(browserHistory, store);

export default store;
