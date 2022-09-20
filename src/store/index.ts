import { createStore, applyMiddleware } from 'redux'
import { createLogger } from 'redux-logger'
import createSagaMiddleware from 'redux-saga'
import combineReducers from './reducer/index';
import loginSaga from './saga/login';
import registerSaga from './saga/register';

const logger = createLogger();
const sagaMiddleware = createSagaMiddleware()
const store = createStore(combineReducers, applyMiddleware(logger, sagaMiddleware));

sagaMiddleware.run(loginSaga);
sagaMiddleware.run(registerSaga);

export default store
