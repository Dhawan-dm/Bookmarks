import { Actions } from '../actionTypes/index'
import { LoginDataType, SignUpDataType } from '../reducer/userAuth/type'

export const signUpRequest = (e: SignUpDataType) => {
    return {
        type: Actions.SIGN_UP_REQUEST,
        payload: e
    }
}

export const signUpSuccess = (e: SignUpDataType) => {
    return {
        type:Actions.SIGN_UP_SUCCESS,
        payload:e
    }
}

export const loginRequest = (e: LoginDataType) => {
    return {
        type: Actions.LOGIN_REQUEST,
        payload: e
    }
}

export const loginSuccess = (e: LoginDataType) => {
    return {
        type: Actions.LOGIN_REQUEST,
        payload: e
    }
}

