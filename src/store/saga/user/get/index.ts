import { put, takeEvery } from 'redux-saga/effects'

import { apiData } from '../../../../utils/services';
import { getMeSuccess, loginSuccess } from '../../../actions';
import { Actions } from '../../../actionTypes';
import { actionTypes} from '../../../reducer/userAuth/type';

function* workerSaga():any{
    try {
        let data = yield apiData( "me", "get")
        console.log(data);
            yield put(getMeSuccess(data));  
            
    } catch (error) {
        
    }
}

function* getMeSaga() {
    yield takeEvery(Actions.GET_ME_REQUEST, workerSaga);
}

export default getMeSaga
