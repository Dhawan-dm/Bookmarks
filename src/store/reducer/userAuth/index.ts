import { Actions } from "../../actionTypes";
import { actionTypes, UserArray } from "./type"


const initialState: UserArray = {
    users: [],
}

const authReducer = (state = initialState, action: actionTypes) => {
    switch (action.type) {
        case Actions.SIGN_UP_SUCCESS: {
            return { ...state, users: [action.payload, ...state.users] }
        }
    
        case Actions.LOGIN_SUCCESS: {
            return { ...state, users: [action.payload, ...state.users] }
        }
        default:
            return state
    }
}
export default authReducer;