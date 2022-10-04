import React, { useEffect, useState } from "react";

import { FiSearch } from "react-icons/fi";
import { IoMdArrowDropright } from "react-icons/io";
import { BsFillFolderFill } from "react-icons/bs";
import { AiFillHeart } from "react-icons/ai";
import { TbLogout } from "react-icons/tb";
import { BsPlus } from "react-icons/bs";

import CreateNestedModal from "../shared/Modlas/Create/index"

import {
  AddFolder,
  AddFolderBox,
  AddFolderBoxIcon,
  ContainerBottom,
  ContainerMid,
  ContainerMidFolderBox,
  ContainerMidFolderBoxItems,
  ContainerMidFolderBoxItemsIconA,
  ContainerMidFolderBoxItemsIconB,
  ContainerMidInputBox,
  ContainerMidInputBoxIcon,
  ContainerMidInputBoxInput,
  ContainerTop,
  ContainerTopHeading,
  ContainerTopImage,
  FavouriteBox,
  FavouriteIcon,
  FavouriteText,
  FavouriteTextBox,
  Folder,
  FolderBox,
  FolderMenuIcon,
  Heading,
  LogoutBox,
  LogoutIcon,
  LogoutText,
  LogoutTextBox,
  Wrapper,
} from "./style";
import saly11 from "../../asset/images/Saly-11.svg";
import { connect } from "react-redux";
import { Dispatch } from "redux";
import { getBookmarkRequest, getFolderRequest } from "../../store/actions";
import LongMenu from "../shared/Menu";
import { GetBookmarkDataType } from "../../store/reducer/folder/type";
import Spinner from "../shared/spinner/spinner-1";

interface PropsType {
  folders: any[];
  getFolder: ()=>void;
  getBookmark: (e:GetBookmarkDataType) =>void;
  handleFav: ()=>void;
  favStatus:boolean;
}

const DashBoardLeft = (props: PropsType) => {

  const [addOpen, setaddOpen] = useState(false);
  const [toggle, setToggle] = useState(false);
  const [folderId, setFolderId] = useState("");
  

  useEffect(() => {
      props.getFolder()
  }, [])
  
 const handleLogout = () =>{
  localStorage.clear();
 } 

 const handleAdd = () =>{
  setaddOpen(true);
}
const handleModalClose = () =>{
    setaddOpen(false);
}
 
const handleFolderClick = (id:string, name:string) =>{
  if(!toggle || folderId!==id){
    props.getBookmark({folderId:id, folderName:name});
    setToggle(true);
    setFolderId(id);
  }
  else
  {
    setToggle(false);
    setFolderId("");
  }
  if(props.favStatus)
  {
    props.handleFav();
    setToggle(true);
    setFolderId("");
  }
}

  return (
    <Wrapper>
      <ContainerTop>
        <ContainerTopImage>
          <img src={saly11} alt="" />
        </ContainerTopImage>
        <ContainerTopHeading>
          <Heading>BOOKMARKS</Heading>
        </ContainerTopHeading>
      </ContainerTop>
      <ContainerMid>
        <ContainerMidInputBox>
          <ContainerMidInputBoxIcon>
            <FiSearch size={"45%"} color={"#1D1929"}></FiSearch>
          </ContainerMidInputBoxIcon>
          <ContainerMidInputBoxInput placeholder="Search.."></ContainerMidInputBoxInput>
        </ContainerMidInputBox>
        <ContainerMidFolderBox>
          {props.folders.length === 0 ?<Spinner component="folders" ></Spinner>:(props.folders.map((folder: any) => {
            return(<ContainerMidFolderBoxItems tabIndex={1} key={folder.id} onClick={() =>handleFolderClick(folder.id, folder.name)}>
              <ContainerMidFolderBoxItemsIconA>
                <IoMdArrowDropright
                  size={"80%"}
                  color={"#77757F"}
                ></IoMdArrowDropright>
              </ContainerMidFolderBoxItemsIconA>
              <ContainerMidFolderBoxItemsIconB>
                <BsFillFolderFill
                  size={"100%"}
                  color={"#5352ED"}
                ></BsFillFolderFill>
              </ContainerMidFolderBoxItemsIconB>
              <FolderBox>
                <Folder>{folder.name}</Folder>
              </FolderBox>
              <FolderMenuIcon>
                <LongMenu folderId={folder.id} component={"left"} bookmarkId={""}></LongMenu>
              </FolderMenuIcon>
            </ContainerMidFolderBoxItems>
          )}))}
        </ContainerMidFolderBox>
        <AddFolderBox onClick={handleAdd}>
          <AddFolderBoxIcon>
              <BsPlus></BsPlus>
          </AddFolderBoxIcon>
          <AddFolder>ADD FOLDER</AddFolder>
        </AddFolderBox>
      </ContainerMid>
      <ContainerBottom>
        <FavouriteBox onClick={()=>props.handleFav()}>
          <FavouriteIcon>
            <AiFillHeart size={"55%"} color={"#5352ED"}></AiFillHeart>
          </FavouriteIcon>
          <FavouriteTextBox>
            <FavouriteText>Favourite</FavouriteText>
          </FavouriteTextBox>
        </FavouriteBox>
        <LogoutBox>
          <LogoutIcon>
            <TbLogout size={"55%"} color={"#5352ED"}></TbLogout>
          </LogoutIcon>
          <LogoutTextBox>
            <LogoutText onClick={handleLogout}>Log out</LogoutText>
          </LogoutTextBox>
        </LogoutBox>
      </ContainerBottom>
      {
      <CreateNestedModal open={addOpen} folderId={""} close={()=>handleModalClose()}></CreateNestedModal>
      }
    </Wrapper>
  );
};

const mapDispaychtoProps = (dispatch: Dispatch) => {
  return {
    getFolder: () => dispatch(getFolderRequest()),
    getBookmark: (e :GetBookmarkDataType) => dispatch(getBookmarkRequest(e)),
  };
};
const mapStatetoProps = (state: any) => {
  return {
    folders: state.folderReducer.folders,
  };
};
export default connect(mapStatetoProps, mapDispaychtoProps)(DashBoardLeft);
