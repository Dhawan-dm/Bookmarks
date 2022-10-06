import styled from "styled-components";
import { constants } from "zlib";

interface FolderType {
    select:string;
    name:string;
}

interface ContainerMidType{
    view:string
}

export const Wrapper = styled.div`
display:flex;
flex-direction:column;
width:19%;
height:100%;
font-family: "Inter", sans-serif;
`
export const ContainerTop = styled.div`
display:flex;
flex-direction:column;
height:19%;
`
export const ContainerTopImage = styled.div`
padding:9% 6% 2% 8%;
`
export const ContainerTopHeading = styled.div`
width:58%;
display:flex;
justify-content:center;

`
export const Heading = styled.h3`
margin:0px;
`
export const ContainerMid = styled.div`
display:flex;
flex-direction:column;
height:65%;

`
export const ContainerMidInputBox = styled.div`
display:flex;
height:10%;
margin:0% 4%;
border-radius:10px;
border:2px solid #DCDCDC;
`
export const ContainerMidInputBoxIcon = styled.div`
width:15%;
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
`

export const ContainerMidInputBoxInput = styled.input`
width:80%;
font-size:15px;
border:none;
&:focus {
    outline: none;
  }
`

export const ContainerMidFolderBox = styled.div`
height:65%;
margin:9% 4%;
opacity:${(props:ContainerMidType)=>props.view==="opaque"?"0.4":"1"};
overflow-y:scroll;
&::-webkit-scrollbar{
    display:none;
}
`

export const ContainerMidFolderBoxItems = styled.div`
height:12%;
display:flex;
border-radius:10px;
background-color:${(props:FolderType)=>props.select === props.name?"#E4E3FF":"#FFFFFF"};
&:hover{
    background-color:#E4E3FF;
}
&:focus{
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
width:8%;
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
width:72%;
height:100%;
`

export const Folder = styled.p`
padding: 0% 5%;
font-size:13px;
color:#77757F;
`
export const FolderMenuIcon = styled.div`
display:flex;
justify-content:center;
align-items:center;
width:10%;
height:100%;
`

export const FolderMenu = styled.div`
border:2px solid black;
position:relative;
left:50%;
top:50%;
width:100%;
padding:20%;
z-index:10;
`

export const FolderMenuItems = styled.div`
width:100%;
`

export const AddFolderBox = styled.div`
display:flex;
height:10%;
width:50%;
align-self:center;
border:2px solid #5352ED;
border-radius:15px;
justify-content:center;
align-items:center;
color:#5352ED;
`
export const AddFolderBoxIcon = styled.div`
display:flex;
height:100%;
width:12%;
justify-content:center;
align-items:center;
`

export const AddFolder = styled.div`
display:flex;
height:100%;
width:40%
justify-content:center;
align-items:center;
font-size:12px;
font-weight:600;
`

export const ContainerBottom = styled.div`
height:15%;
display:flex;
flex-direction:column;
`

export const FavouriteBox = styled.div`
height:40%;
display:flex;
border-radius:10px;
&:hover{
    background-color:#E4E3FF;
}
`

export const FavouriteIcon = styled.div`
width:15%;
height:100%;
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
`

export const FavouriteTextBox = styled.div`
display:flex;
flex-direction:column;
justify-content:center;
width:82%;
height:100%;
`

export const FavouriteText = styled.p`
font-size:15px;
color:#77757F;
font-weight:600;
`

export const LogoutBox = styled.div`
height:40%;
display:flex;
border-radius:10px;
&:hover{
    background-color:#E4E3FF;
}
`

export const LogoutIcon = styled.div`
width:15%;
height:100%;
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
`

export const LogoutTextBox = styled.div`
display:flex;
flex-direction:column;
justify-content:center;
width:82%;
height:100%;
`
export const LogoutText = styled.p`
font-size:15px;
color:#77757F;
font-weight:600;
`
