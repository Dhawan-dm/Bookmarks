import { Dispatch } from 'redux';
import { connect } from 'react-redux';

import { signUpRequest } from '../../store/actions';
import { Wrapper } from './style'
import "./style.ts"
import LoginSignUpRight from "../../components/LoginSignUpRight";
import LoginSignUpLeft from "../../components/LoginSignUpLeft/index";
import { SignUpDataType } from "../../store/reducer/userAuth/type";

interface signupType {
    addUser: (e: SignUpDataType) => void
}

const Signup = (props: signupType)=>{

    const handleSubmit = (email:string, password:string, name:string) =>{
        props.addUser({name:name, email:email, password:password})
    } 

    return (
        <Wrapper>
            <LoginSignUpLeft page = {'Signup'}></LoginSignUpLeft>
            <LoginSignUpRight page = {'Sign Up'} onSubmit={(email:string, password:string, name:string)=>handleSubmit(
                email, password, name)}></LoginSignUpRight>
        </Wrapper>
    )
}

const mapDispaychtoProps = (dispatch: Dispatch) => {
    return { addUser: (e: SignUpDataType) => dispatch(signUpRequest(e)) }
}
export default connect(null, mapDispaychtoProps)(Signup)

