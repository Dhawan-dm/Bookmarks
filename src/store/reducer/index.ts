import { combineReducers } from "redux";

import folderReducer from "./folder";
import authReducer from "./userAuth";


export default combineReducers({
  authReducer,
  folderReducer,
});
