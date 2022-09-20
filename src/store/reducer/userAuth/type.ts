import { loginRequest, signUpRequest } from "../../actions";

export interface LoginDataType{
    email:string,
    password:string
}

export interface SignUpDataType {
    name?: string,
    email: string,
    password: string
}

export interface UserArray{
    users:SignUpDataType[]
}

export type actionTypes = ReturnType<typeof signUpRequest | typeof loginRequest>
