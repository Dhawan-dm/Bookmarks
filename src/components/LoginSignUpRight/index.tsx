import { useState } from "react";

import { FcGoogle } from "react-icons/fc";
import { AiOutlineEye } from "react-icons/ai";
import { Formik } from "formik";

import Check from "../shared/Checkbox";
import {
  Container,
  ContainerContent,
  ContainerInputTop,
  ContainerInputBottom,
  Label,
  ChecboxContainer,
  OrWith,
  GoogleSignUp,
  GoogleAnchor,
  GoogleContainer,
  LoginDiv,
  LoginAnchor,
  MobileHead,
  ForgetPasswordDiv,
  ForgetPasswordAnchor,
  InputBox,
  EyeContainer,
  GoogleIcon,
  InputTag,
  Err,
  SubmitButton,
  ErrMessage,
} from "./style";

interface PropsType {
  page: string;
  onSubmit: (email: string, password: string, name: string) => void;
}
interface FormSignUpValuesType {
  name: string;
  email: string;
  password: string;
}

const LoginSignUpRight = (props: PropsType) => {
  const [error, seterror] = useState("none");
  const [showPassword, setShowPassword] = useState(false);
  const initialSignUpValues: FormSignUpValuesType = {
    name: "",
    email: "",
    password: "",
  };

  const handleEyeClick = () => {
    setShowPassword(!showPassword);
  };

  return (
    <Container>
      <Formik
        initialValues={initialSignUpValues}
        validate={(values) => {
          let errors = {} as FormSignUpValuesType;
          if (!values.name && props.page === "Sign Up") {
            errors.name = "Required*";
          }
          if (!values.email) {
            errors.email = "Required*";
          } 
          else if (
            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
          ) {
            errors.email = "Invalid email address";
          }
          if (!values.password) {
            errors.password = "Required*";
          } 
          else if (values.password.length < 8) {
            errors.password = "Minimum 8 letters required*";
          }
          return errors;
        }}
        onSubmit={(values) => {
          console.log(values);
          props.onSubmit(values.name, values.email, values.password);
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
        }) => (
          <form
            style={{
              height: "100%",
              width: "100%",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignContent: "center",
            }}
            onSubmit={handleSubmit}
          >
            {props.page === "Sign Up" ? (
              <MobileHead>Sign Up</MobileHead>
            ) : (
              <MobileHead>Login</MobileHead>
            )}
            <ContainerContent>
              {props.page === "Sign Up" ? (
                <ContainerInputTop page={props.page}>
                  <InputBox
                    page={props.page}
                    err={
                      errors.name && touched.name && errors.name ? "yes" : "no"
                    }
                  >
                    <InputTag
                      page={props.page}
                      id="name"
                      name="name"
                      type={"text"}
                      placeholder={"Name"}
                      onBlur={handleBlur}
                      onChange={handleChange}
                      value={values.name}
                    ></InputTag>
                  </InputBox>
                  <Err>
                    <ErrMessage
                      err={
                        errors.name && touched.name && errors.name
                          ? "yes"
                          : "no"
                      }
                    >
                      {errors.name && touched.name && errors.name}
                    </ErrMessage>
                  </Err>
                  <InputBox
                    page={props.page}
                    err={
                      errors.email && touched.email && errors.email
                        ? "yes"
                        : "no"
                    }
                  >
                    <InputTag
                      page={props.page}
                      id="email"
                      name="email"
                      type={"email"}
                      placeholder={"E-mail"}
                      onBlur={handleBlur}
                      onChange={handleChange}
                      value={values.email}
                    ></InputTag>
                  </InputBox>
                  <Err>
                    <ErrMessage
                      err={
                        errors.email && touched.email && errors.email
                          ? "yes"
                          : "no"
                      }
                    >
                      {errors.email && touched.email && errors.email}
                    </ErrMessage>
                  </Err>
                  <InputBox
                    page={props.page}
                    err={
                      errors.password && touched.password && errors.password
                        ? "yes"
                        : "no"
                    }
                  >
                    <InputTag
                      page={props.page}
                      id="password"
                      name="password"
                      type={showPassword ? "text" : "password"}
                      onBlur={handleBlur}
                      placeholder={"Password"}
                      onChange={handleChange}
                      value={values.password}
                    ></InputTag>
                    <EyeContainer>
                      <AiOutlineEye
                        size={"45%"}
                        color={"#91919F"}
                        onClick={() => handleEyeClick()}
                      ></AiOutlineEye>
                    </EyeContainer>
                  </InputBox>
                  <Err>
                    <ErrMessage
                      err={
                        errors.password && touched.password && errors.password
                          ? "yes"
                          : "no"
                      }
                    >
                      {errors.password && touched.password && errors.password}
                    </ErrMessage>
                  </Err>
                </ContainerInputTop>
              ) : (
                <ContainerInputTop page={props.page}>
                  <InputBox
                    page={props.page}
                    err={
                      errors.email && touched.email && errors.email
                        ? "yes"
                        : "no"
                    }
                  >
                    <InputTag
                      page={props.page}
                      id="email"
                      name="email"
                      type={"text"}
                      onBlur={handleBlur}
                      placeholder={"E-mail"}
                      onChange={handleChange}
                      value={values.email}
                    ></InputTag>
                  </InputBox>
                  <Err>
                    <ErrMessage
                      err={
                        errors.email && touched.email && errors.email
                          ? "yes"
                          : "no"
                      }
                    >
                      {errors.email && touched.email && errors.email}
                    </ErrMessage>
                  </Err>
                  <InputBox
                    page={props.page}
                    err={
                      errors.password && touched.password && errors.password
                        ? "yes"
                        : "no"
                    }
                  >
                    <InputTag
                      page={props.page}
                      id="password"
                      name="password"
                      type={showPassword ? "text" : "password"}
                      onBlur={handleBlur}
                      placeholder={"Password"}
                      onChange={handleChange}
                      value={values.password}
                    ></InputTag>
                    <EyeContainer>
                      <AiOutlineEye
                        size={"70%"}
                        color={"#91919F"}
                        onClick={() => handleEyeClick()}
                      ></AiOutlineEye>
                    </EyeContainer>
                  </InputBox>
                  <Err>
                    <ErrMessage
                      err={
                        errors.password && touched.password && errors.password
                          ? "yes"
                          : "no"
                      }
                    >
                      {errors.password && touched.password && errors.password}
                    </ErrMessage>
                  </Err>
                </ContainerInputTop>
              )}
              <ContainerInputBottom>
                <ChecboxContainer page={props.page}>
                  <Check color={"blue"}></Check>
                  <Label>
                    By signing up, you agree to the
                    <LoginAnchor to={"/terms"} variant={"terms"}>
                      Terms of Service and Privacy Policy
                    </LoginAnchor>
                  </Label>
                </ChecboxContainer>
                <SubmitButton type="submit">{props.page}</SubmitButton>
                <OrWith page={props.page}>or with</OrWith>
                <GoogleContainer page={props.page}>
                  <GoogleSignUp>
                    <GoogleIcon>
                      <FcGoogle size={"80%"} className="icon"></FcGoogle>
                    </GoogleIcon>
                    <GoogleAnchor to={"/Google"}>
                      Sign Up with Google
                    </GoogleAnchor>
                  </GoogleSignUp>
                </GoogleContainer>
                <ForgetPasswordDiv page={props.page}>
                  <ForgetPasswordAnchor to={"/Forget"}>
                    Forget Password?
                  </ForgetPasswordAnchor>
                </ForgetPasswordDiv>
                {props.page === "Sign Up" ? (
                  <LoginDiv page={props.page}>
                    Already have an account?
                    <LoginAnchor to={"/login"} variant={"route"}>
                      Login
                    </LoginAnchor>
                  </LoginDiv>
                ) : (
                  <LoginDiv page={props.page}>
                    Don't have an account yet?
                    <LoginAnchor to={"/"} variant={"route"}>
                      Signup
                    </LoginAnchor>
                  </LoginDiv>
                )}
              </ContainerInputBottom>
            </ContainerContent>
          </form>
        )}
      </Formik>
    </Container>
  );
};

export default LoginSignUpRight;
