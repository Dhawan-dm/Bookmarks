import { useEffect } from 'react'
import LoginSignUpLeft from '../../components/LoginSignUpLeft'
import LoginSignUpRight from '../../components/LoginSignUpRight'
import { Wrapper } from './style'

const Login = ()=>{

  useEffect(() => {
   
    console.log("lo");
    
  },[])
  return (
    <Wrapper>
      <LoginSignUpLeft page = {'Login'}></LoginSignUpLeft>
      <LoginSignUpRight page = {'Login'}></LoginSignUpRight>
    </Wrapper>
  )
}

export default Login