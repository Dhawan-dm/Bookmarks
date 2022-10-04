import { put, takeEvery } from 'redux-saga/effects'

import { apiData } from '../../../../utils/services';
import { loginRequest, loginSuccess } from '../../../actions';
import { Actions } from '../../../actionTypes';
import { actionTypes} from '../../../reducer/userAuth/type';

function* workerSaga(action: actionTypes):any{
    try {
        let data = yield apiData( "login", "post", action.payload)
        // console.log(data);
        if("token" in data){
            yield put(loginSuccess(data));
            localStorage.setItem("authToken",data.token)
        }  
    } catch (error) {
        
    }
}

function* loginSaga() {
    yield takeEvery(Actions.LOGIN_REQUEST, workerSaga);
}

export default loginSaga
