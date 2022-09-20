import { put, takeEvery } from "redux-saga/effects";
import { apiData } from "../../../../utils/services";
import { addFolderSuccess } from "../../../actions";
import { Actions } from "../../../actionTypes";
import { actionTypes } from "../../../reducer/folder/type";

function* workerSaga(action:actionTypes):any{
    try {
        let data = yield apiData( "folder", "post", action.payload)
        console.log(data);
        yield put(addFolderSuccess(data));
        
    } catch (error) {
        
    }
}

function* addFolderSaga() {
    yield takeEvery(Actions.ADD_FOLDER_REQUEST, workerSaga);
}

export default addFolderSaga