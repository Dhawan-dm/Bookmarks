import { Link } from "react-router-dom";
import styled from "styled-components";
import Saly12 from "../../asset/images/Saly-12.svg"
import Saly13 from '../../asset/images/Saly-13.svg'
import Saly14 from '../../asset/images/Saly-14.svg'

interface ImagePropsType{
  image:string
  mode:string
}

interface ContainerBotttomPropsType{
  view:string
}

interface BookmarksViewPropsType{
  mode:string
}

interface ToggleBox{
  select:boolean;
}

export const Wrapper = styled.div`
display:flex;
flex-direction:column;
width:81%;
height:100%;
background-color:#F5F5F5;
font-family: "Inter", sans-serif;
`

export const NavBox = styled.div`
display:flex;
width:100%;
height:7%;
justify-content:end;
`

export const ProfileBox = styled.div`
display:flex;
width:20%;
height:100%;
`

export const ProfileDp = styled.div`
width:20%;
height:100%;
background-image: url(${Saly14});
background-repeat: no-repeat;
background-position: center;
`
export const ProfileInfoBox = styled.div`
display:flex;
flex-direction:column;
width:80%;
height:100%;
justify-content:center;
align-items:start;
padding: 0px 10px;
`
export const UserName = styled.h3`
font-size:12px;
margin:0px;
`
export const UserMail = styled.p`
font-size:10px;
margin:0px;
`

export const ContainerTop = styled.div`
display:flex;
width:100%;
height:32%;
justify-content:center;
align-items:center;
`

export const ContentBox = styled.div`
display:flex;
width:92%;
height:98%;
background-color:#5352ED;
border-radius:20px;
`

export const ContentBoxLeft = styled.div`
display:flex;
flex-direction:column;
height:100%;
width:70%;
`

export const HeadingBox = styled.div`
display:flex;
width:80%;
height:25%;
justify-content:start;
align-items:center;
align-self:center;
`

export const Heading = styled.h3`
font-size:18px;
color:#FFFFFF;
`

export const UrlBox = styled.div`
width:80%;
height:35%;
justify-content:start;
align-items:center;
align-self:center;
`
export const UrlHeading = styled.div`
width:100%;
height:30%;
`

export const Url = styled.h3`
font-weight:100;
font-size:12px;
color:#FFFFFF;
margin:0px;
`
export const UrlInputBox = styled.div`
width:100%;
height:65%;
justify-content:start;
align-items:center;
align-self:center;
`
export const UrlInput = styled.input`
width:100%;
height:90%;
background-color:#6C6BF9;
border-radius:15px;
font-size:15px;
color:#FFFFFF;
border:none;
padding:0px 30px;
&:focus {
    outline: none;
  }
&::placeholder{
  color:#E6E2EA;
  font-size:11px;
}  
`
export const FolderBox = styled.div`
width:80%;
height:35%;
justify-content:start;
align-items:center;
align-self:center;
`
export const FolderHeadingBox = styled.div`
display:flex;
padding:5px 0px;
`

export const FolderHeading = styled.div`
width:42%;
height:30%;
`

export const Folder = styled.h3`
font-weight:100;
font-size:12px;
color:#FFFFFF;
margin:0px;
`
export const FolderInputBox = styled.div`
display:flex;
width:109%;
height:65%;
`
export const FolderInput = styled.input`
width:50%;
height:90%;
margin:0px 3px;
background-color:#6C6BF9;
border-radius:15px;
font-size:15px;
color:#FFFFFF;
border:none;
padding:0px 30px;
&:focus {
    outline: none;
  }
  &::placeholder{
    color:#E6E2EA;
    font-size:11px;
  }  
`
export const FolderBtnBox = styled.div`
display:flex;
width:50%;
height:90%;
justify-content:flex-end;

`
export const FolderBtn = styled.button`
width:40%;
height:90%;
border-radius:15px;
background-color:#FFFFFF;
font-size:15px;
border:none;
`

export const ContainerBoxRight = styled.div`
display:flex;
flex-direction:column;
height:100%;
width:30%;
background-image: url(${Saly12});
background-repeat: no-repeat;
background-position: center;
background-size: 90%;
object-fit: contain;
`

export const ContainerMid = styled.div`
display:flex;
width:100%;
height:9%;
justify-content:center;
`
export const ContainerMidContentBox=styled.div`
display:flex;
width:92%;
height:100%;
align-items:center;
`
export const ContainerMidInputBox = styled.div`
display:flex;
width:40%;
height:80%;
border-radius:20px;
background-color:#DCDCDC;
align-items:center;
`
export const ContainerMidIconBox = styled.div`
display:flex;
width:10%;
height:100%;
justify-content:center;
align-items:center;
`

export const ContainerMidInput = styled.input`
width:70%;
height:90%;
background-color:#DCDCDC;
border:none;
border-radius:20px;
&:focus{
  outline:none;
}
`

export const ContainerMidAddLinkBox = styled.div`
display:flex;
width:40%;
height:100%;
justify-content:end;
align-items:center;
`
export const AddFolderBox = styled.div`
display:flex;
height:70%;
width:55%;
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
font-size:15px;
font-weight:600;
`

export const ToggleViewBox = styled.div`
display:flex;
height:100%;
width:20%;
justify-content:end;
align-items:center;
`
export const ToggleViewIconBoxA = styled.div`
display:flex;
height:60%;
width:20%;
justify-content:center;
align-items:center;
border-radius:5px;
background-color:${(props:ToggleBox)=>props.select?"#5352ED":"#E6E2EA"};
`

export const ContainerBottom = styled.div`
display:flex;
height:51%;
width:100%;
justify-content:center;
align-items:center;
opacity:${(props:ContainerBotttomPropsType)=>props.view==="opaque"?"0.3":"1"};
filter:${(props:ContainerBotttomPropsType)=>props.view==="opaque"?"brightness(0.9)":"brightness(1)"};
`
export const ContainerBottomBox = styled.div`
display:flex;
width:92%;
height:90%;
flex-wrap:wrap;
overflow:scroll;
&::-webkit-scrollbar{
  display:none;
}
`

export const ContainerNoBookmark = styled.div`
display:flex;
position:relative;
top:10%;
left:1%;
right:1%;
bottom:10%;
flex-direction:column;
width:100%;
height:50%;
justify-content:center;
align-items:center;
align-self:center;
`

export const ContainerNoBookmarkIconBox = styled.div`
width:25%;
height:40%;
text-align:center;
`

export const ContainerNoBookmarkDetails = styled.div`
display:flex;
flex-direction:column;
width:25%;
height:50%;
justify-content:start;
align-items:center;
`
export const ContainerNoBookmarkHead = styled.h3`
display:flex;
width:100%;
height:20%;
font-size:15px;
justify-content:center;
align-items:center;
margin:2px 0px;
color: #474749;
;
`
export const ContainerNoBookmarkTextBox = styled.div`
display:flex;
width:45%;
height:20%;
font-size:10px;
justify-content:center;
color:#77757F;
`
export const ContainerNoBookmarkText = styled.p`
text-align:center;
margin:0px;
`
export const LinkToBookmark = styled.div`
display:flex;
flex-direction:${(props:BookmarksViewPropsType)=>props.mode==="horizontal"?"column":"row"};
justify-content:center;
align-content:center;
height:${(props:BookmarksViewPropsType)=>props.mode==="horizontal"?"100%":"50%"};
width:${(props:BookmarksViewPropsType)=>props.mode==="horizontal"?"24%":"99%"};
border-radius:20px;
margin:5px 5px;
background: #FFFFFF;
box-shadow: 0px 6px 12px -6px rgba(24, 39, 75, 0.12), 0px 8px 24px -4px rgba(24, 39, 75, 0.08);
text-decoration:none;
overflow:scroll;
&::-webkit-scrollbar{
  display:none;
}
`

export const ImageBox = styled(Link)`
height: 50%;
width: ${(props:ImagePropsType)=>props.mode==="horizontal"?"90%":"25%"};
align-self: center;
background-image: url(${(props:ImagePropsType)=>props.image?props.image:Saly13});
background-repeat: no-repeat;
background-position: center;
background-size: contain;
border-radius: 18px;
`

export const InfoBox = styled.div`
display:flex;
flex-direction:column;
height:${(props:BookmarksViewPropsType)=>props.mode==="horizontal"?"40%":"70%"};
width:${(props:BookmarksViewPropsType)=>props.mode==="horizontal"?"90%":"50%"};
align-self:center;
`
export const InfoTop = styled.div`
display:flex;
width:100%;
height:30%;
color:#000000;
`
export const InfoTitleBox = styled.div`
display:flex;
width:100%;
height:100%;
align-items:center;
`
export const InfoTitle = styled.h3`
font-size:15px;
`

export const BookmarkIcon = styled.div`
display:${(props:BookmarksViewPropsType)=>props.mode==="horizontal"?"flex":"none"};
width:15%;
height:100%;
`

export const BookmarkIconVertical = styled.div`
display:${(props:BookmarksViewPropsType)=>props.mode==="horizontal"?"none":"flex"};
width:25%;
height:100%;
`
export const VerticalIcon1 = styled.div`
display:flex;
width:33%;
height:100%;
justify-content:center;
align-items:center;
`

export const InfoDescBox = styled.div`
display:flex;
align-items:center;
width:${(props:BookmarksViewPropsType)=>props.mode==="horizontal"?"100%":"50%"};
height:50%;
`
export const DescBox = styled.div`
font-size:11px;
color:#9D9B9F;
height:100%;
`
export const LinkBox = styled.div`
display:${(props:BookmarksViewPropsType)=>props.mode==="horizontal"?"flex":"none"};
justify-content:flex-end;
align-items:center;
width:100%;
height:30%;
justify-content:end;
`

export const AddFavBox = styled.div`
height:50%;
width:20%;
border-radius:30px;
background-color:white;
`


