import { put, takeEvery } from 'redux-saga/effects'

import { apiData } from '../../../../utils/services';
import { signUpSuccess } from '../../../actions';
import { Actions } from '../../../actionTypes';
import { actionTypes } from '../../../reducer/userAuth/type';

function* workerSaga(action:actionTypes):any{
    try {
        let data = yield apiData( "register", "post", action.payload)
        console.log(data);
        if("token" in data){
            yield put(signUpSuccess(data));
            localStorage.setItem("authToken",data.token)
        }
        
    } catch (error) {
        
    }
}

function* registerSaga() {
    yield takeEvery(Actions.SIGN_UP_REQUEST, workerSaga);
}

export default registerSaga