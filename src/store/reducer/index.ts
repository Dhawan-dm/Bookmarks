import { combineReducers } from "redux";
import alertReducer from "./alert";
import authReducer from "./userAuth";
import userReducer from "./users";


export default combineReducers({
  authReducer,
  userReducer,
  alertReducer
});
