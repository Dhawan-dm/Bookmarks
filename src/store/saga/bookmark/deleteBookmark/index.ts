import { put, takeEvery } from "redux-saga/effects";

import { apiData } from "../../../../utils/services";
import { deleteBookmarkSuccess } from "../../../actions";
import { Actions } from "../../../actionTypes";
import { actionTypes } from "../../../reducer/bookmarks/type";


function* workerSaga(action:actionTypes):any{

    try {
        let data = yield apiData( `bookmark`, "delete", action.payload)
        console.log(data);
        yield put(deleteBookmarkSuccess(action.payload.bookmarkId));
    } catch (error) {
        
    }
}

function* deleteBookmarkSaga() {
    yield takeEvery( Actions.DELETE_BOOKMARK_REQUEST, workerSaga);
}

export default deleteBookmarkSaga