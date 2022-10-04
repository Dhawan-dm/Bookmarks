import { put, takeEvery } from "redux-saga/effects";
import { apiData } from "../../../../utils/services";
import { getFolderSuccess } from "../../../actions";
import { Actions } from "../../../actionTypes";

function* workerSaga():any{
    try {
        let data = yield apiData("folders", "get")
        yield put(getFolderSuccess(data));
    } catch (error) {
        
    }
}

function* getFolderSaga() {
    yield takeEvery(Actions.GET_FOLDER_REQUEST, workerSaga);
}

export default getFolderSaga