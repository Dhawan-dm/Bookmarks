import { Actions } from '../actionTypes/index'

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
