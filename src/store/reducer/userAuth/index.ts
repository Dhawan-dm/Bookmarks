import { Actions } from "../../actionTypes";
import { actionTypes, UserArray } from "./type";

const initialState: UserArray = {
  users: {
    name:"",
    email:"",
    password:""
  }
};

const authReducer = (state = initialState, action: actionTypes) => {
  switch (action.type) {
    case Actions.GET_ME_SUCCESS: {
      console.log(action.payload);

      return { ...state, users:action.payload}
    }
    default:
      return state;
  }
};
export default authReducer;
