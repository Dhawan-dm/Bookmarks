import { put, takeEvery } from 'redux-saga/effects'
import { fetchData } from '../../utils/apiData';
import { fetchGithubUserFaliure, fetchGithubUserSuccess } from '../actions';
import { AsyncActions } from '../actionTypes';


function* workerSaga(): any {
    try {
        let data = yield fetchData();
        yield put(fetchGithubUserSuccess(data));
    } catch (e) {
        yield put(fetchGithubUserFaliure());
    }
}

function* rootSaga() {
    yield takeEvery(AsyncActions.GITHUB_USER_DATA_REQUEST, workerSaga)
}

export default rootSaga;   