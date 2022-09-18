import { Link } from "react-router-dom";
import styled from "styled-components";

interface StylePropsType {
    page: string;
}
interface AnchorPropsType {
    variant: string;
}
export const Container = styled.div`
width:40%;
height:100%;
font-family: 'Inter', sans-serif;
@media screen and (orientation:portrait)
{
    width:100%;
}
`
export const MobileHead = styled.h3`
font-size:120%;
text-align:center;
@media screen and (orientation:landscape)
{
    display:none;
}
`
export const ContainerContent = styled.div`
height: 80%;
width:80%;
margin-top: 10%;
display:flex;
flex-direction:column;
@media screen and (orientation:portrait)
{
    height: 100%;
    width: 100%;
    margin-top: 0px;
}
`
export const ContainerInputTop = styled.div`
height:${(props: StylePropsType) => props.page === 'Signup' ? "40%" : '30%'};
width:80%;
align-self:center;
margin-top:${(props: StylePropsType) => props.page === 'Signup' ? "10%" : '20%'};
@media screen and (orientation:portrait)
{
    display: flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    height: ${(props: StylePropsType) => props.page === 'Signup' ? "24%" : '18%'};
    width:100%;
}
@media screen and (max-width:1025px) and (orientation:landscape)
{
    height: 35%;
}
@media screen and (min-width: 701px) and (max-width: 900px) and (orientation:potrait) {
    height:${(props: StylePropsType) => props.page === 'Signup' ? "20%" : '15%'};
    margin-top:${(props: StylePropsType) => props.page === 'Signup' ? "10%" : '10%'}
}
@media screen and (min-width: 701px) and (max-width: 800px) and (orientation:landscape) {
    height:35%;
}
@media screen and (min-width: 901px) and (max-width: 950px) and (orientation:potrait) {
    height:15%;
}
@media screen and (min-width: 501px) and (max-width: 700px) {
    height:${(props: StylePropsType) => props.page === 'Signup' ? "30%" : '25%'};
}
`
export const InputBox = styled.div`
display:flex;
width:100%;
height:${(props: StylePropsType) => props.page === 'Signup' ? "23%" : '29%'};
border: 1px solid #F1F1FA;
border-radius: 14px;
margin: 20px 0px;
@media screen and (orientation:portrait)
{
    width:90%;
    margin:10px 0px;
}
`
export const EyeContainer = styled.div`
display:flex;
justify-content:center;
align-items:center;
height:99%;
width:19%;
@media screen and (orientation:portrait)
{
    width: 15%;
}
`

export const ContainerInputBottom = styled.div`
height:60%;
width:80%;
align-self:center;
@media screen and (orientation:portrait)
{
    width:90%;
}
`
export const ChecboxContainer = styled.div`
display:${(props: StylePropsType) => props.page === 'Signup' ? "flex" : 'none'};
margin:15px 0px;
@media screen and (min-width:901px) and (max-width: 1100px) {
    margin:40px 0px 20px 0px;
}
@media screen and (min-width: 1101px) {
    margin:10px 20px 20px 0px;
}
@media screen and (max-width: 400px) and (orientation:portrait) {
    margin:25px 0px 10px 0px;
}
@media screen and (min-width: 401px) and (max-width: 600px) and (orientation:portrait) {
    margin:10px 0px 10px 0px;
}
@media screen and (min-width: 601px) and (max-width: 800px) and (orientation:portrait) {
    margin:10px 0px 10px 0px;
}
@media screen and (min-width: 801px) and (max-width: 900px) and (orientation:portrait) {
    margin:0px 0px 10px 0px;
}
@media screen and (max-width: 300px) and (orientation:portrait){
    margin: 25px 0px 0px 0px;
}
@media screen and (min-width: 801px) and (max-width: 900px) and (orientation:landscape) {
    margin: 20px 0px 10px 0px;
}
@media screen and (min-width: 901px) and (max-width:1100px) and (orientation:landscape) {
    margin: 15px 0px 10px 0px;
}
@media screen and (min-width: 601px) and (max-width: 700px) and (orientation:landscape) {
    margin:25px 0px 10px 0px;
}
`
export const Label = styled.label`
font-size: 13px;
margin:0px 10px;
align-self:center;
@media screen and (orientation:portrait)
{
    font-size:11px;
}
@media screen and (max-width: 1280px) {
    font-size: 12px ;
}
@media screen and (max-width: 300px){
    font-size: 10px;
}
@media screen and (min-width: 601px) and (max-width: 700px) and (orientation:landscape) {
    font-size: 10px;
}
@media screen and (min-width: 701px) and (max-width: 800px) and (orientation:landscape) {
    font-size: 9px;
}
@media screen and (min-width: 801px) and (max-width: 900px) and (orientation:landscape) {
    font-size: 9px;
}
@media screen and (min-width: 901px) and (max-width:1100px) and (orientation:landscape) {
    font-size: 11px;
}
`
export const OrWith = styled.div`
display:${(props: StylePropsType) => props.page === 'Signup' ? "block" : 'none'};
width:100%;
text-align: center;
font-size: 15px;
margin-top: 10px;
color: #91919F;
@media screen and (orientation:portrait)
{
    font-size:11px;
    margin-top:8px;
}
`
export const GoogleContainer = styled.div`
display:${(props: StylePropsType) => props.page === 'Signup' ? "flex" : 'none'};
flex-direction:column;
justify-content:center;
width:100%;
height:15%;
font-size:20px;
color:white;
border-radius:14px;
margin-top:15px;
border: 1px solid #F1F1FA;
@media screen and (orientation:portrait)
{
    font-size:11px;
    margin-top:12px;
    height:10%;
}
@media screen and (min-width:751px) and (max-width:1000px){
    height:12%;
}

`
export const GoogleIcon = styled.div`
display:flex;
justify-content:center;
align-items:center;
height:100%;
width:15%;
@media screen and (min-width:751px) and (max-width:1000px)and (orientation:portrait){
    width:6%;
}
@media screen and (min-width:500px) and (max-width:750px) and (orientation:portrait){
    width:8%;
}
`
export const GoogleSignUp = styled.div`
display:flex;
justify-content:center;
`

export const GoogleAnchor = styled(Link)`
color: black;
font-size:15px;
align-self:center;
text-decoration:none;
font-weight:bold;
@media screen and (max-width: 300px){
    font-size: 12px;
}
@media screen and (min-width:851px) and (max-width:1000px){
    font-size:14px;
}
@media screen and (min-width:701px) and (max-width:850px){
    font-size:12px;
}
`

export const LoginDiv = styled.div`
display:flex;
color:#91919F;
margin: ${(props: StylePropsType) => props.page === 'Signup' ? "2% 18%" : '2% 15%'}; 
font-size:17px;
justify-content:center;
@media screen and (min-width:901px) and (max-width: 1180px) {
    font-size: 11px ;
}
@media screen and (min-width: 1280px) {
    font-size: 14px ;
}
@media screen and (max-width: 400px){
    font-size: 11px;
}
@media screen and (min-width: 401px) and (max-width: 600px){
    font-size: 11px;
}
@media screen and (min-width: 601px) and (max-width: 700px) and (orientation:landscape) {
    font-size: 7px;
}
@media screen and (min-width: 801px) and (max-width: 900px) {
    font-size: 13px;
}
@media screen and (min-width: 701px) and (max-width: 800px) and (orientation:landscape) {
    font-size: 8px;
}
@media screen and (min-width: 801px) and (max-width: 900px) and (orientation:landscape) {
    font-size:9px;
}
@media screen and (min-width: 901px) and (max-width: 970px) and (orientation:landscape) {
    font-size:10px;
}
@media screen and (min-width: 1150px) and (max-width: 1280px) and (orientation:landscape) {
    font-size:11px;
}
`

export const LoginAnchor = styled(Link)`
margin: 0px 1%;
text-decoration:${(props: AnchorPropsType) => props.variant === "route" ? "underline" : "none"};
`

//login

export const ForgetPasswordDiv = styled.div`
display:${(props: StylePropsType) => props.page === 'Signup' ? "none" : 'block'};
margin:20px 0px;
font-size:15px;
font-weight:200;
text-align:center;
`

export const ForgetPasswordAnchor = styled(Link)`
color:pruple;
text-decoration:none;
`