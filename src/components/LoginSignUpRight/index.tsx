import { FcGoogle } from 'react-icons/fc'
import { AiOutlineEye } from 'react-icons/ai'
import Button from '../shared/Button';
import Check from '../shared/Checkbox';
import Input from '../shared/Inputes/Input';
import { Container, ContainerContent, ContainerInputTop, ContainerInputBottom, Label, ChecboxContainer, OrWith, GoogleSignUp, GoogleAnchor, GoogleContainer, LoginDiv, LoginAnchor, MobileHead, ForgetPasswordDiv, ForgetPasswordAnchor, InputBox, EyeContainer, GoogleIcon, InputTag } from './style';
import { useState } from 'react';
import { Formik, FormikHelpers, FormikProps, Form, Field, FieldProps } from 'formik';

interface PropsType {
    page: string;
    onSubmit: (email: string, password: string, name?: string) => void
}
interface FormSignUpValuesType {
    name: string,
    email: string,
    password: string
}

const LoginSignUpRight = (props: PropsType) => {

    const [showPassword, setShowPassword] = useState(false);
    const initialSignUpValues: FormSignUpValuesType = {
        name: "",
        email: "",
        password: ""
    }

    const handleSubmit = () => {
        console.log("working");

    }

    const handleEyeClick = () => {
        setShowPassword(!showPassword)
    }

    return (
        <Container>
            <Formik
                initialValues={initialSignUpValues}
                validate={values => {
                    const errors: FormSignUpValuesType = {
                        name: '',
                        email: '',
                        password: ''
                    };
                    if (!values.name) {
                        errors.name = 'Required*'
                    }
                    else if (
                        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.name)
                    ) {
                        errors.name = 'Invalid email address';
                    }
                    if (!values.email) {
                        errors.email = 'Required*';
                    } else if (
                        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
                    ) {
                        errors.email = 'Invalid email address';
                    }
                    return errors;
                }}
                onSubmit={(values, actions) => {
                    console.log({ values, actions });
                    alert(JSON.stringify(values, null, 2));
                    actions.setSubmitting(false);
                }}
            >
                {({
                    values,
                    errors,
                    touched,
                    handleChange,
                    handleBlur,
                    handleSubmit,
                    isSubmitting,
                    /* and other goodies */
                }) =>
                (<Form style={{ "height": "100%", "width": "100%", "display": "flex", "flexDirection": "column", "justifyContent": "center", "alignContent": "center" }}>
                    {props.page === "Signup" ? <MobileHead>Sign Up</MobileHead> : <MobileHead>Login</MobileHead>}
                    <ContainerContent>
                        {props.page === "Signup" ? (
                            <ContainerInputTop page={props.page}>

                                <InputBox page={props.page}>
                                    <InputTag page={props.page} id="name" name='name' type={'text'} placeholder={'Name'} onChange={handleChange} value={values.name}></InputTag>
                                </InputBox>
                                <InputBox page={props.page}>
                                    <InputTag page={props.page} id="email" name='email' type={'email'} placeholder={'E-mail'} onChange={handleChange} value={values.email}></InputTag>
                                    {errors.email && touched.email && errors.email}
                                </InputBox>
                                <InputBox page={props.page}>
                                    <InputTag page={props.page} id="password" name='password' type={showPassword ? 'text' : 'password'} placeholder={'Password'} onChange={handleChange} value={values.password}></InputTag>
                                    <EyeContainer>
                                        <AiOutlineEye size={"70%"} color={'#91919F'} onClick={() => handleEyeClick()}></AiOutlineEye>
                                    </EyeContainer>
                                </InputBox>
                            </ContainerInputTop>) : (<ContainerInputTop page={props.page}>
                                <InputBox page={props.page}>
                                    <InputTag page={props.page} type={'text'} placeholder={'E-mail'} ></InputTag>
                                </InputBox>
                                <InputBox page={props.page}>
                                    <InputTag page={props.page} type={showPassword ? 'text' : 'password'} placeholder={'Password'} ></InputTag>
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
                            <Button page={props.page} type={"submit"}></Button>
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
                </Form>)}
            </Formik>
        </Container>
    );
}

export default LoginSignUpRight;
