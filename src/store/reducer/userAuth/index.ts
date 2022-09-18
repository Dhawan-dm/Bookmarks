import { Actions } from "../../actionTypes";
import { actionTypes } from "./type"

interface stateType {
   users:{
    name: string,
    userId: string,
    password: string
   }[]
}

const initialState: stateType = {
    users: [],
}

const authReducer = (state = initialState, action: actionTypes) => {
    switch (action.type) {
        case Actions.SIGN_UP: {
            return { ...state, users: [action.payload, ...state.users] }
        }
        default:
            return state
    }
}
export default authReducer;