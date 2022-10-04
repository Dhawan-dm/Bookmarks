import { put, takeEvery } from "redux-saga/effects";

import { apiData } from "../../../../utils/services";
import { renameFolderSuccess } from "../../../actions";
import { Actions } from "../../../actionTypes";
import { actionTypes } from "../../../reducer/folder/type";

function* workerSaga(action:actionTypes):any{
    try {
        let data = yield apiData( "rename-folder", "put", action.payload)
        console.log(data);
        yield put(renameFolderSuccess(data));
    } catch (error) {
        
    }
}

function* renameFolderSaga() {
    yield takeEvery(Actions.RENAME_FOLDER_REQUEST, workerSaga);
}

export default renameFolderSaga