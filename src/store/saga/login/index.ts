import { call, put, takeEvery, takeLatest } from 'redux-saga/effects'
import { apiData } from '../../../utils/services';
import { loginSuccess } from '../../actions';
import { Actions } from '../../actionTypes';
import { actionTypes} from '../../reducer/userAuth/type';

function* workerSaga(action:actionTypes):any{
    try {
        let data = yield apiData(action.payload, "login", "post")
        console.log(data);
        if("token" in data){
            yield put(loginSuccess(data));
            localStorage.setItem("authToken",JSON.stringify(data.token))
            // window.location.replace("/profile");
        }
        
    } catch (error) {
        
    }
}

function* loginSaga() {
    yield takeEvery(Actions.LOGIN_REQUEST, workerSaga);
}

export default loginSaga
