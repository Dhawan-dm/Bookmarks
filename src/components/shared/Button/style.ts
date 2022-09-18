import styled from "styled-components";

interface StylePropsType{
    page:string
}

export const CustomButton = styled.button`
width:100%;
background: #5352ED;
height:15%;
font-size:20px;
color:white;
border-radius:14px;
border:none;
@media screen and (orientation:portrait)
{
    height:10%;
    font-size:12px;
    border-radius:10px;
    margin-top:15px;
}

@media screen and (min-width:500px)
{
    font-size:100%;
    border-radius:10px;
}
@media screen and (min-width: 701px) and (max-width: 900px) and (orientation:potrait){
     height:8%;
}
@media screen and (min-width: 901px) and (max-width: 950px) and (orientation:potrait) {
    height:7%
}
@media screen and (min-width: 501px) and (max-width: 700px) {
    height:12%
}
`