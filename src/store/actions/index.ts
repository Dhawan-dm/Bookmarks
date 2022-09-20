import { Actions } from '../actionTypes/index'
import { FolderDataType } from '../reducer/folder/type'
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
        type: Actions.LOGIN_SUCCESS,
        payload: e
    }
}

export const addFolderRequest = (e: FolderDataType) => {
    console.log("workiiiii");
    return {
        type: Actions.ADD_FOLDER_REQUEST,
        payload: e
    }
}

export const addFolderSuccess = (e: FolderDataType) => {
    
    return {
        type: Actions.ADD_FOLDER_SUCCESS,
        payload: e
    }
}

export const getFolderRequest = () =>{
    return{
        type: Actions.GET_FOLDER_REQUEST,
    }
}

export const getFolderSuccess = (e:any) =>{
    return{
        type: Actions.GET_FOLDER_SUCCESS,
        payload: e
    }
}