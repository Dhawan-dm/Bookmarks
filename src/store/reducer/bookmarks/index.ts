import { Actions } from "../../actionTypes";
import { actionTypes, BookmarkArray, } from "./type"


const initialState:BookmarkArray={
    bookmarks:[] ,
}

const bookmarkReducer = (state = initialState, action: actionTypes) => {
    switch (action.type) {
        // case Actions.create_bookmark_REQUEST: {
        //     return { ...state, bookmarks: [action.payload, ...state.bookmarks] }
        // }
    
        case Actions.CREATE_BOOKMARK_SUCCESS: {
            return { ...state, bookmarks: [...state.bookmarks, action.payload] }
        }

        default:
            return state
    }

}
export default bookmarkReducer;