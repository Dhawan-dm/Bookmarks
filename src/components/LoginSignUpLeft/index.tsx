import {Container, ContainerBottom, ContainerTop, Heading} from './style'
import ContainerImage from '../../asset/images/Saly-10.svg'

interface PropsType{
  page:string;
}

const LoginSignUpLeft = (props:PropsType)=>{
  return (
    
      <Container>
        <ContainerTop>
            <Heading variant={'Light'}>Welcome,</Heading>
            <Heading variant={'dark'}>Get Started</Heading>
        </ContainerTop>
        <ContainerBottom >
            <img src={ContainerImage} alt="" />    
        </ContainerBottom>
      </Container>
   
  );
}

export default LoginSignUpLeft;
