import { Actions } from "../../actionTypes";
import { actionTypes, FolderArray, } from "./type"


const initialState: FolderArray = {
    folders: [],
}

const folderReducer = (state = initialState, action: actionTypes) => {
    switch (action.type) {
        // case Actions.ADD_FOLDER_REQUEST: {
        //     return { ...state, folders: [action.payload, ...state.folders] }
        // }
    
        case Actions.ADD_FOLDER_SUCCESS: {
            return { ...state, folders: [action.payload, ...state.folders] }
        }
        default:
            return state
    }
}
export default folderReducer;