import { createStore, applyMiddleware } from 'redux'
import { createLogger } from 'redux-logger'
import createSagaMiddleware from 'redux-saga'
import combineReducers from './reducer/index';
import createBookmarkSaga from './saga/bookmark/createBookmark';
import deleteBookmarkSaga from './saga/bookmark/deleteBookmark';
import getBookmarkSaga from './saga/bookmark/getBookmark';
import MoveBookmarkSaga from './saga/bookmark/moveBookmark';
import ToggleFavoriteBookmarkSaga from './saga/bookmark/ToggleFav';
import addFolderSaga from './saga/folder/addFolder';
import deleteFolderSaga from './saga/folder/deleteFolder';
import getFolderSaga from './saga/folder/getFolder';
import renameFolderSaga from './saga/folder/renameFolder';
import getMeSaga from './saga/user/get';
import loginSaga from './saga/user/login';
import registerSaga from './saga/user/register';

const logger = createLogger();
const sagaMiddleware = createSagaMiddleware()
const store = createStore(combineReducers, applyMiddleware(logger, sagaMiddleware));

sagaMiddleware.run(loginSaga);
sagaMiddleware.run(registerSaga);
sagaMiddleware.run(addFolderSaga);
sagaMiddleware.run(getFolderSaga);
sagaMiddleware.run(renameFolderSaga);
sagaMiddleware.run(deleteFolderSaga);
sagaMiddleware.run(createBookmarkSaga);
sagaMiddleware.run(getBookmarkSaga);
sagaMiddleware.run(deleteBookmarkSaga);
sagaMiddleware.run(MoveBookmarkSaga);
sagaMiddleware.run(getMeSaga);
sagaMiddleware.run(ToggleFavoriteBookmarkSaga);

export default store
