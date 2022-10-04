import { put, takeEvery } from "redux-saga/effects";

import { apiData } from "../../../../utils/services";
import { getBookmarkSuccess } from "../../../actions";
import { Actions } from "../../../actionTypes";
import { actionTypes } from "../../../reducer/folder/type";


function* workerSaga(action:actionTypes):any{

    try {
        let data = yield apiData( `folder-bookmarks?folderId=${action.payload.folderId}`, "get")
        console.log(data);
        yield put(getBookmarkSuccess(data));
    } catch (error) {
        
    }
}

function* getBookmarkSaga() {
    yield takeEvery( Actions.GET_BOOKMARK_REQUEST, workerSaga);
}

export default getBookmarkSaga