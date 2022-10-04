import { put, takeEvery } from "redux-saga/effects";

import { apiData } from "../../../../utils/services";
import { createBookmarkSuccess } from "../../../actions";
import { Actions } from "../../../actionTypes";
import { actionTypes, CreateBookmarkDataType, MoveBookmarksDataType } from "../../../reducer/folder/type";


function* workerSaga(action:actionTypes):any{
    try {
        let bookmarkData = yield apiData( "bookmark", "post", {url:action.payload.url, name:action.payload.name}as CreateBookmarkDataType)
        let obj = {
            folderId:action.payload.folderId,
            bookmarkId:bookmarkData.id,
        }
        try {
            let data = yield apiData("move-bookmark", "PATCH", obj as MoveBookmarksDataType)
            console.log(data);            
        } catch (error) {
            
        }
        yield put(createBookmarkSuccess(bookmarkData));
    } catch (error) {
        
    }
    
}

function* createBookmarkSaga() {
    yield takeEvery(Actions.CREATE_BOOKMARK_REQUEST, workerSaga);
}

export default createBookmarkSaga