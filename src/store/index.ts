import { createStore, applyMiddleware } from 'redux'
import { createLogger } from 'redux-logger'
import createSagaMiddleware from 'redux-saga'
import combineReducers from './reducer/index';
import addFolderSaga from './saga/folder/addFolder';
import getFolderSaga from './saga/folder/getFolder';
import loginSaga from './saga/login';
import registerSaga from './saga/register';

const logger = createLogger();
const sagaMiddleware = createSagaMiddleware()
const store = createStore(combineReducers, applyMiddleware(logger, sagaMiddleware));

sagaMiddleware.run(loginSaga);
sagaMiddleware.run(registerSaga);
sagaMiddleware.run(addFolderSaga);
sagaMiddleware.run(getFolderSaga);

export default store
