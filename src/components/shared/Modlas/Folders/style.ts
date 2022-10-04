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
height:85%;
`

export const ContainerMidFolderBox = styled.div`
height:100%;
margin:9% 4%;
overflow-y:scroll;
&::-webkit-scrollbar{
    display:none;
}
`

export const ContainerMidFolderBoxItems = styled.div`
height:30%;
display:flex;
border-radius:10px;
&:hover{
    background-color:#E4E3FF;
}
`

export const ContainerMidFolderBoxItemsIconA = styled.div`
width:10%;
height:100%;
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
`
export const ContainerMidFolderBoxItemsIconB = styled.div`
width:12%;
height:100%;
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
`

export const FolderBox = styled.div`
display:flex;
flex-direction:column;
justify-content:center;
width:80%;
height:100%;
`

export const Folder = styled.p`
padding: 0% 5%;
font-size:13px;
color:#77757F;
`