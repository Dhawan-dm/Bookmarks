import * as React from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import { IoMdArrowDropright } from "react-icons/io";
import { BsFillFolderFill } from "react-icons/bs";
import {
  CloseBox,
  Container,
  ContainerMidFolderBox,
  ContainerMidFolderBoxItems,
  ContainerMidFolderBoxItemsIconA,
  ContainerMidFolderBoxItemsIconB,
  Folder,
  FolderBox,
  Heading,
  HeadingBox,
  Wrapper,
} from "./style";
import { useState } from "react";
import { connect } from "react-redux";
import { GrFormClose } from "react-icons/gr";
import Spinner from "../../spinner/spinner-1";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "100%",
  height: "30%",
  bgcolor: "background.paper",
  boxShadow: 24,
  pt: 2,
  px: 4,
  pb: 3,
};

interface PropsType {
  open: boolean;
  folders:[];
  close: () => void;
  getFolderInfo:(id:string, name:string)=>void;
}

const FolderNestedModal = (props: PropsType) => {

  const handleClose = () => {
    props.close();
  };
  const handleFolderClick = (id:string, name:string) => {
    props.getFolderInfo(id, name);
    handleClose();
  };

  return (
    <div>
      <Modal open={props.open}>
        <Box sx={{ ...style, width: "20%", borderRadius: "20px" }}>
          <Wrapper>
            <HeadingBox>
              <Heading>Add Folder</Heading>
              <CloseBox>
                <GrFormClose onClick={handleClose}></GrFormClose>
              </CloseBox>
            </HeadingBox>
            <Container>
            <ContainerMidFolderBox>
          {props.folders.length === 0 ?<Spinner component="modals" ></Spinner>:(props.folders.map((folder: any) => {
            return(<ContainerMidFolderBoxItems key={folder.id} onClick={() =>handleFolderClick(folder.id, folder.name)}>
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
            </ContainerMidFolderBoxItems>
          )}))}
        </ContainerMidFolderBox>
            </Container>
          </Wrapper>
        </Box>
      </Modal>
    </div>
  );
};

const mapStatetoProps = (state: any) => {
    return {
      folders: state.folderReducer.folders,
    };
};


export default connect(mapStatetoProps)(FolderNestedModal);
