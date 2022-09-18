import { FcGoogle } from 'react-icons/fc'
import { AiOutlineEye } from 'react-icons/ai'
import Button from '../shared/Button';
import Check from '../shared/Checkbox';
import Input from '../shared/Inputes/Input';
import { Container, ContainerContent, ContainerInputTop, ContainerInputBottom, Label, ChecboxContainer, OrWith, GoogleSignUp, GoogleAnchor, GoogleContainer, LoginDiv, LoginAnchor, MobileHead, ForgetPasswordDiv, ForgetPasswordAnchor, InputBox, EyeContainer, GoogleIcon } from './style';
interface PropsType {
    page: string;
}

const LoginSignUpRight = (props: PropsType)=>{
    return (
        <Container>
            {props.page === "Signup" ? <MobileHead>Sign Up</MobileHead> : <MobileHead>Login</MobileHead>}
            <ContainerContent>
                {props.page === "Signup" ? (<ContainerInputTop page={props.page}>
                    <InputBox page={props.page}>
                        <Input page={props.page} type={'text'} placeholder={'Name'}></Input>
                    </InputBox>
                    <InputBox page={props.page}>
                        <Input page={props.page} type={'text'} placeholder={'E-mail'}></Input>
                    </InputBox>
                    <InputBox page={props.page}>
                        <Input page={props.page} type={'password'} placeholder={'Password'}></Input>
                        <EyeContainer>
                            <AiOutlineEye size={"70%"} color={'#91919F'}></AiOutlineEye>
                        </EyeContainer>
                    </InputBox>
                </ContainerInputTop>) : (<ContainerInputTop page={props.page}>
                    <InputBox page={props.page}>
                        <Input page={props.page} type={'text'} placeholder={'E-mail'}></Input>
                    </InputBox>
                    <InputBox page={props.page}>
                        <Input page={props.page} type={'password'} placeholder={'Password'}></Input>
                        <EyeContainer>
                            <AiOutlineEye size={"70%"} color={'#91919F'}></AiOutlineEye>
                        </EyeContainer>
                    </InputBox>
                </ContainerInputTop>)}
                <ContainerInputBottom>
                    <ChecboxContainer page={props.page}>
                        <Check color={"blue"}></Check>
                        <Label>By signing up, you agree to the
                            <LoginAnchor to={'/terms'} variant={"terms"}>Terms of Service and Privacy Policy</LoginAnchor></Label>
                    </ChecboxContainer>
                    <Button page={props.page}></Button>
                    <OrWith page={props.page}>or with</OrWith>
                    <GoogleContainer page={props.page}>
                        <GoogleSignUp>
                            <GoogleIcon>
                                <FcGoogle size={'80%'} className="icon"></FcGoogle>
                            </GoogleIcon>
                            <GoogleAnchor to={"/Google"}>Sign Up with Google</GoogleAnchor>
                        </GoogleSignUp>
                    </GoogleContainer>
                    <ForgetPasswordDiv page={props.page}>
                        <ForgetPasswordAnchor to={'/Forget'}>Forget Password?</ForgetPasswordAnchor>
                    </ForgetPasswordDiv>
                    {props.page === "Signup" ? (<LoginDiv page={props.page}>
                        Already have an account?
                        <LoginAnchor to={'/login'} variant={"route"}>Login</LoginAnchor>
                    </LoginDiv>) :
                        (<LoginDiv page={props.page}>
                            Don't have an account yet?
                            <LoginAnchor to={'/'} variant={"route"}>Signup</LoginAnchor>
                        </LoginDiv>)}
                </ContainerInputBottom>
            </ContainerContent>
        </Container>
    );
}

export default LoginSignUpRight;
