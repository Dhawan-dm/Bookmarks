import { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

interface StylePropsType {
  page: string;
}
interface InputPropsType {
  page: string;
  err: string;
}
interface ErrorPropsType {
  err: string;
}
interface AnchorPropsType {
  variant: string;
}

export const Error = styled.p`
  color: red;
`;
export const Container = styled.div`
  width: 40%;
  height: 100%;
  font-family: "Inter", sans-serif;
  @media screen and (orientation: portrait) {
    width: 100%;
  }
`;
export const MobileHead = styled.h3`
  font-size: 120%;
  text-align: center;
  @media screen and (orientation: landscape) {
    display: none;
  }
`;
export const ContainerContent = styled.div`
  height: 80%;
  width: 80%;
  margin-top: 10%;
  display: flex;
  flex-direction: column;
  @media screen and (orientation: portrait) {
    height: 100%;
    width: 100%;
    margin-top: 0px;
  }
`;
export const ContainerInputTop = styled.div`
  height: ${(props: StylePropsType) =>
    props.page === "Sign Up" ? "40%" : "30%"};
  width: 80%;
  align-self: center;
  margin-top: ${(props: StylePropsType) =>
    props.page === "Sign Up" ? "10%" : "20%"};
  @media screen and (orientation: portrait) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: ${(props: StylePropsType) =>
      props.page === "Sign Up" ? "30%" : "18%"};
    width: 100%;
  }
  @media screen and (max-width: 1025px) and (orientation: landscape) {
    height: 35%;
  }
  @media screen and (min-width: 701px) and (max-width: 900px) and (orientation: potrait) {
    margin-top: ${(props: StylePropsType) =>
      props.page === "Sign Up" ? "10%" : "10%"};
  }
  @media screen and (min-width: 701px) and (max-width: 800px) and (orientation: landscape) {
    height: 35%;
  }
  @media screen and (min-width: 901px) and (max-width: 950px) and (orientation: potrait) {
    height: 15%;
  }
  @media screen and (min-width: 301px) and (max-width: 500px) {
    height: ${(props: StylePropsType) =>
      props.page === "Sign Up" ? "35%" : "22%"};
  }
  @media screen and (min-width: 501px) and (max-width: 600px) {
    height: ${(props: StylePropsType) =>
      props.page === "Sign Up" ? "35%" : "25%"};
  }
  @media screen and (min-width: 601px) and (max-width: 700px) {
    height: ${(props: StylePropsType) =>
      props.page === "Sign Up" ? "35%" : "25%"};
  }
  @media screen and (min-width: 701px) and (max-width: 850px) and (orientation: portrait) {
    height: ${(props: StylePropsType) =>
      props.page === "Sign Up" ? "35%" : "22%"};
  }
  @media screen and (min-width: 851px) and (max-width: 950px) and (orientation: portrait) {
    height: ${(props: StylePropsType) =>
      props.page === "Sign Up" ? "25%" : "18%"};
  }
`;
export const InputBox = styled.div`
  display: flex;
  width: 100%;
  height: ${(props: InputPropsType) =>
    props.page === "Sign Up" ? "25%" : "29%"};
  border: 1px solid #f1f1fa;
  border-radius: 14px;
  align-self: center;
  margin: ${(props: InputPropsType) =>
    props.err === "no" ? "0px 0px" : "0px"};
  @media screen and (orientation: portrait) {
    width: 90%;
    margin: 10px 0px;
  }
`;
export const InputTag = styled.input`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 8px 16px;
  gap: 10px;
  width: 81%;
  height: ${(props: StylePropsType) =>
    props.page === "Sign Up" ? "70%" : "85%"};
  border: none;
  font-size: 17px;
  outline: none;
  &:focus {
  }
  @media screen and (orientation: portrait) {
    height: ${(props: StylePropsType) =>
      props.page === "Sign Up" ? "75%" : "90%"};
    width: 85%;
    font-size: 12px;
    padding: 4px 8px;
    border-radius: 8px;
  }
  @media screen and (min-width: 801px) and (max-width: 950px) {
      height: ${(props: StylePropsType) =>
        props.page === "Sign Up" ? "80%" : "95%"};
    }
  &::-ms-reveal,
  &::-ms-clear {
    display: none;
  }
`;
export const Err = styled.div`
  displey:flex;
  width: 88%;
  height: 15px;
  padding: 2.5px 0px;
  color: red;
  font-size: 12px;
  @media screen and (orientation: portrait) {
    height:10px;
    font-size:8px;
    padding:1px 0px;
  }
`;  
export const ErrMessage = styled.p`
display: ${(props: ErrorPropsType) =>
    props.err === "yes" ? "block" : "none"};
    margin:0px;
    color: red;
    align-items:start;
`

export const SubmitButton = styled.button`
  width: 100%;
  background: #5352ed;
  height: 15%;
  font-size: 20px;
  color: white;
  border-radius: 14px;
  border: none;
  @media screen and (orientation: portrait) {
    height: 10%;
    font-size: 12px;
    border-radius: 10px;
    margin-top: 15px;
  }

  @media screen and (min-width: 500px) {
    font-size: 100%;
    border-radius: 10px;
  }
  @media screen and (min-width: 701px) and (max-width: 900px) and (orientation: potrait) {
    height: 8%;
  }
  @media screen and (min-width: 901px) and (max-width: 950px) and (orientation: potrait) {
    height: 7%;
  }
  @media screen and (min-width: 501px) and (max-width: 700px) {
    height: 12%;
  }
`;
export const EyeContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 99%;
  width: 19%;
  @media screen and (orientation: portrait) {
    width: 15%;
  }
`;

export const ContainerInputBottom = styled.div`
  height: 60%;
  width: 80%;
  align-self: center;
  @media screen and (orientation: portrait) {
    width: 90%;
  }
`;
export const ChecboxContainer = styled.div`
  display: ${(props: StylePropsType) =>
    props.page === "Sign Up" ? "flex" : "none"};
  margin: 15px 0px;
  @media screen and (min-width: 901px) and (max-width: 1100px) {
    margin: 40px 0px 20px 0px;
  }
  @media screen and (min-width: 1101px) {
    margin: 10px 20px 20px 0px;
  }
  @media screen and (max-width: 400px) and (orientation: portrait) {
    margin: 25px 0px 10px 0px;
  }
  @media screen and (min-width: 401px) and (max-width: 600px) and (orientation: portrait) {
    margin: 10px 0px 10px 0px;
  }
  @media screen and (min-width: 601px) and (max-width: 800px) and (orientation: portrait) {
    margin: 10px 0px 10px 0px;
  }
  @media screen and (min-width: 801px) and (max-width: 900px) and (orientation: portrait) {
    margin: 0px 0px 10px 0px;
  }
  @media screen and (max-width: 300px) and (orientation: portrait) {
    margin: 25px 0px 0px 0px;
  }
  @media screen and (min-width: 801px) and (max-width: 900px) and (orientation: landscape) {
    margin: 20px 0px 10px 0px;
  }
  @media screen and (min-width: 901px) and (max-width: 1100px) and (orientation: landscape) {
    margin: 15px 0px 10px 0px;
  }
  @media screen and (min-width: 601px) and (max-width: 700px) and (orientation: landscape) {
    margin: 25px 0px 10px 0px;
  }
`;
export const Label = styled.label`
  font-size: 13px;
  margin: 0px 10px;
  align-self: center;
  @media screen and (orientation: portrait) {
    font-size: 11px;
  }
  @media screen and (max-width: 1280px) {
    font-size: 12px;
  }
  @media screen and (max-width: 300px) {
    font-size: 10px;
  }
  @media screen and (min-width: 601px) and (max-width: 700px) and (orientation: landscape) {
    font-size: 10px;
  }
  @media screen and (min-width: 701px) and (max-width: 800px) and (orientation: landscape) {
    font-size: 9px;
  }
  @media screen and (min-width: 801px) and (max-width: 900px) and (orientation: landscape) {
    font-size: 9px;
  }
  @media screen and (min-width: 901px) and (max-width: 1100px) and (orientation: landscape) {
    font-size: 11px;
  }
`;
export const OrWith = styled.div`
  display: ${(props: StylePropsType) =>
    props.page === "Sign Up" ? "block" : "none"};
  width: 100%;
  text-align: center;
  font-size: 15px;
  margin-top: 10px;
  color: #91919f;
  @media screen and (orientation: portrait) {
    font-size: 11px;
    margin-top: 8px;
  }
`;
export const GoogleContainer = styled.div`
  display: ${(props: StylePropsType) =>
    props.page === "Sign Up" ? "flex" : "none"};
  flex-direction: column;
  justify-content: center;
  width: 100%;
  height: 15%;
  font-size: 20px;
  color: white;
  border-radius: 14px;
  margin-top: 15px;
  border: 1px solid #f1f1fa;
  @media screen and (orientation: portrait) {
    font-size: 11px;
    margin-top: 12px;
    height: 10%;
  }
  @media screen and (min-width: 751px) and (max-width: 1000px) {
    height: 12%;
  }
`;
export const GoogleIcon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 15%;
  @media screen and (min-width: 751px) and (max-width: 1000px) and (orientation: portrait) {
    width: 6%;
  }
  @media screen and (min-width: 500px) and (max-width: 750px) and (orientation: portrait) {
    width: 8%;
  }
`;
export const GoogleSignUp = styled.div`
  display: flex;
  justify-content: center;
`;

export const GoogleAnchor = styled(Link)`
  color: black;
  font-size: 15px;
  align-self: center;
  text-decoration: none;
  font-weight: bold;
  @media screen and (max-width: 300px) {
    font-size: 12px;
  }
  @media screen and (min-width: 851px) and (max-width: 1000px) {
    font-size: 14px;
  }
  @media screen and (min-width: 701px) and (max-width: 850px) {
    font-size: 12px;
  }
`;

export const LoginDiv = styled.div`
  display: flex;
  color: #91919f;
  margin: ${(props: StylePropsType) =>
    props.page === "Sign Up" ? "2% 18%" : "2% 15%"};
  font-size: 17px;
  justify-content: center;
  @media screen and (min-width: 901px) and (max-width: 1180px) {
    font-size: 11px;
  }
  @media screen and (min-width: 1280px) {
    font-size: 14px;
  }
  @media screen and (max-width: 400px) {
    font-size: 11px;
  }
  @media screen and (min-width: 401px) and (max-width: 600px) {
    font-size: 11px;
  }
  @media screen and (min-width: 601px) and (max-width: 700px) and (orientation: landscape) {
    font-size: 7px;
  }
  @media screen and (min-width: 801px) and (max-width: 900px) {
    font-size: 13px;
  }
  @media screen and (min-width: 701px) and (max-width: 800px) and (orientation: landscape) {
    font-size: 8px;
  }
  @media screen and (min-width: 801px) and (max-width: 900px) and (orientation: landscape) {
    font-size: 9px;
  }
  @media screen and (min-width: 901px) and (max-width: 970px) and (orientation: landscape) {
    font-size: 10px;
  }
  @media screen and (min-width: 1150px) and (max-width: 1280px) and (orientation: landscape) {
    font-size: 11px;
  }
`;

export const LoginAnchor = styled(Link)`
  margin: 0px 1%;
  text-decoration: ${(props: AnchorPropsType) =>
    props.variant === "route" ? "underline" : "none"};
`;

//login

export const ForgetPasswordDiv = styled.div`
  display: ${(props: StylePropsType) =>
    props.page === "Sign Up" ? "none" : "block"};
  margin: 20px 0px;
  font-size: 15px;
  font-weight: 200;
  text-align: center;
`;

export const ForgetPasswordAnchor = styled(Link)`
  color: pruple;
  text-decoration: none;
`;
