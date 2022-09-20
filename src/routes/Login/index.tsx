import { useEffect } from 'react'
import { connect } from 'react-redux'
import { Navigate } from 'react-router-dom'
import { Dispatch } from 'redux'
import LoginSignUpLeft from '../../components/LoginSignUpLeft'
import LoginSignUpRight from '../../components/LoginSignUpRight'
import { loginRequest } from '../../store/actions'
import { LoginDataType } from '../../store/reducer/userAuth/type'
import { Wrapper } from './style'

interface PropsType{
  logUser:(e:LoginDataType)=>void
}

const Login = (props:PropsType)=>{

  const handleSubmit = (email:string, password:string) =>{
    props.logUser({email: email, password: password});
  } 
  
  return (
    <Wrapper>
      <LoginSignUpLeft page = {'Login'} ></LoginSignUpLeft>
      <LoginSignUpRight page = {'Login'} onSubmit={( name:string, email:string, password:string)=>handleSubmit(email, password)}></LoginSignUpRight>
    </Wrapper>
  )
}

const mapDispaychtoProps = (dispatch: Dispatch) => {
  return { logUser: (e: LoginDataType) => dispatch(loginRequest(e)) }
}
export default connect(null, mapDispaychtoProps)(Login)