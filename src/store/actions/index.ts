import { Actions, AsyncActions } from '../actionTypes/index'
import { UserArray } from '../reducer/users/type'

export interface inputType {
    name: string,
    userId: string,
    password: string
}

export const signUp = (e: inputType) => {
    return {
        type: Actions.SIGN_UP,
        payload: {
            name: e.name,
            userId: e.userId,
            password: e.password,
        }
    }
}

export const fetchGithubUserRequest = () => {
    return {
        type: AsyncActions.GITHUB_USER_DATA_REQUEST,
    }
}

export const fetchGithubUserSuccess = (data: UserArray) => {
    return {
        type: AsyncActions.GITHUB_USER_DATA_SUCCESS,
        payload: data
    }
}

export const fetchGithubUserFaliure = () => {
    return {
        type: AsyncActions.GITHUB_USER_DATA_FAILURE,
    }
}