import { createStore, applyMiddleware } from 'redux'
import { createLogger } from 'redux-logger'
import combineReducers from './reducer/index';

const logger = createLogger();
const store = createStore(combineReducers, applyMiddleware(logger));

export default store
