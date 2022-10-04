import { put, takeEvery } from "redux-saga/effects";

import { apiData } from "../../../../utils/services";
import { deleteFolderSuccess } from "../../../actions";
import { Actions } from "../../../actionTypes";
import { actionTypes } from "../../../reducer/folder/type";

function* workerSaga(action:actionTypes):any{
    try {
        let data = yield apiData( "folder", "delete", action.payload)
        console.log(data);
        yield put(deleteFolderSuccess(data));
    } catch (error) {
        
    }
}

function* deleteFolderSaga() {
    yield takeEvery(Actions.DELETE_FOLDER_REQUEST, workerSaga);
}

export default deleteFolderSaga