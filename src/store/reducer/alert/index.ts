import { AsyncActions } from "../../actionTypes";
import { asyncActionFailureType, UserDataFail } from "./type";

const initialState: UserDataFail = {
    isFailed: false,
}

const alertReducer = (stateAlert = initialState, action: asyncActionFailureType) => {
    switch (action.type) {
        case AsyncActions.GITHUB_USER_DATA_FAILURE:{
            return{
                ...stateAlert,
                isFailed:true
            }
        }
        
        default:
            return stateAlert
    }
}
export default alertReducer;