import { combineReducers } from "redux";

import bookmarkReducer from "./bookmarks";
import folderReducer from "./folder";
import authReducer from "./userAuth";


export default combineReducers({
  authReducer,
  folderReducer,
  bookmarkReducer
});
