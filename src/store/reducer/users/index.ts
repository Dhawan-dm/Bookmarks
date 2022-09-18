import { AsyncActions } from "../../actionTypes";
import {  asyncActionTypes, UserArray } from "./type"

const initialState: UserArray = {
    usersData:[],
    isDataFetched: false
}

const userReducer = (stateUser = initialState, action: asyncActionTypes) => {
    switch (action.type) {
        case AsyncActions.GITHUB_USER_DATA_REQUEST:{
            return{
                ...stateUser,
                isDataFetched:false
            }
        }
        case AsyncActions.GITHUB_USER_DATA_SUCCESS: {
            
            return {
                ...stateUser,
                usersData:action.payload,
                isDataFetched:true
            }
        }
        default:
            return stateUser
    }
}
export default userReducer;