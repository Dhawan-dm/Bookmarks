import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import { createLogger } from 'redux-logger'
import rootSaga from './saga';
import combineReducers from './reducer/index';

const logger = createLogger();
const sagaMiddleware = createSagaMiddleware()
const store = createStore(combineReducers, applyMiddleware(logger, sagaMiddleware));

sagaMiddleware.run(rootSaga);


export default store
