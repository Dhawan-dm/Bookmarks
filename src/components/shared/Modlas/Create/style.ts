import styled from "styled-components";

export const Wrapper = styled.div`
display:flex;
flex-direction:column;
height:100%;
width:100%;
font-family: 'Inter', sans-serif;
`

export const HeadingBox = styled.div`
display:flex;
width:100%;
height:20%;
align-items:center;
`

export const Heading = styled.div`
font-size:18px;
font-weight:700;
`
export const CloseBox = styled.div`
display:flex;
width:65%;
height:30%;
justify-content:end;
align-items:center;
`

export const Container = styled.div`
display:flex;
width:100%;
height:80%;
`

export const ContentBox = styled.div`
display:flex;
flex-direction:column;
width:100%;
height:80%;
align-self:end;
`

export const ContentBoxHeadBox = styled.div`
height:25%;
width:100%;
`

export const ContentBoxHead = styled.div`
font-size:15px;
color:#808081;
`

export const ContentBoxInput = styled.input`
width:95%;
height:25%;
border-radius:10px;
align-self:flex-start;
padding:2px 5px;
font-size:15px;
border-color:#5352ED;
&::placeholder{
    color:#5352ED;
}
&:focus{
    outline: none;
}
`

export const ContentBoxBtnBox = styled.div`
display:flex;
height:40%;
width:100%;
justify-content:center;
align-items:end;
`

export const ContentBoxBtn = styled.button`
align-self:end;
width:35%;
height:70%;
background-color:#5352ED;
border-radius:10px;
border:none;
color:#FFFFFF;
`
