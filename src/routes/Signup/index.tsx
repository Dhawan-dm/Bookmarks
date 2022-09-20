import "./style.ts"
import { connect } from 'react-redux';
import React, { useState } from 'react'
import { Dispatch } from 'redux';
import { signUpRequest } from '../../store/actions';
import {Wrapper} from './style'
import LoginSignUpRight from "../../components/LoginSignUpRight";
import LoginSignUpLeft from "../../components/LoginSignUpLeft/index";
import { SignUpDataType } from "../../store/reducer/userAuth/type";

interface signupType {
    addUser: (e: SignUpDataType) => void
}

const Signup = (props: signupType)=>{

    const handleSubmit = ( email:string, password:string, name?:string,) =>{
        props.addUser({name:name, email:email, password:password})
    } 

    return (
        <Wrapper>
            <LoginSignUpLeft page = {'Signup'}></LoginSignUpLeft>
            <LoginSignUpRight page = {'Signup'} onSubmit={(email:string, password:string, name?:string)=>handleSubmit(
                email, password, name)}></LoginSignUpRight>
        </Wrapper>
    )
}

const mapDispaychtoProps = (dispatch: Dispatch) => {
    return { addUser: (e: SignUpDataType) => dispatch(signUpRequest(e)) }
}
export default connect(null, mapDispaychtoProps)(Signup)

