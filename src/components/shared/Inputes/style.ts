import styled from "styled-components"

interface StylePropsType{
page:string
}
export const CustomInput = styled.input`
display: flex;
flex-direction: column;
justify-content: center;
align-items: flex-start;
padding: 8px 16px;
gap: 10px;
width:81%;
height:${(props:StylePropsType)=>props.page === 'Signup'?"70%":"85%"};
border:none;
font-size:17px;
&:focus {
    outline: none;
}
@media screen and (orientation:portrait)
{
    height: ${(props:StylePropsType)=>props.page === 'Signup'?"75%":'90%'};
    width: 85%;
    font-size:12px;
    padding:4px 8px;
    border-radius:8px;
}
@media screen and (min-width: 801px) and (max-width: 950px) {
    height:${(props:StylePropsType)=>props.page === 'Signup'?"80%":'95%'}
}
`