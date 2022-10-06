import * as React from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import {
  CloseBox,
  Container,
  ContentBox,
  ContentBoxBtn,
  ContentBoxBtnBox,
  ContentBoxHead,
  ContentBoxHeadBox,
  ContentBoxInput,
  Heading,
  HeadingBox,
  Wrapper,
} from "./style";
import { useState } from "react";
import { connect } from "react-redux";
import { RenameFolderDataType } from "../../../../store/reducer/folder/type";
import { renameFolderRequest } from "../../../../store/actions";
import { Dispatch } from "redux";
import { GrFormClose } from "react-icons/gr";
import Spinner2 from "../../spinner/spinner-2";

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
  renameFolder: (e: RenameFolderDataType) => void;
  folderId: string;
  close: () => void;
}

const RenameNestedModal = (props: PropsType) => {
  const [value, setValue] = useState("");

  const handleChange = (e: React.FormEvent<HTMLInputElement>) => {
    setValue(e.currentTarget.value);
  };

  const handleClose = () => {
    props.close();
  };
  const handleClick = () => {
    props.renameFolder({ folderId: props.folderId, name: value });
    setValue("");
    handleClose();
  };

  return (
    <div>
      <Modal open={props.open} >
        <Box sx={{ ...style, width: "20%", borderRadius: "20px" }}>
          <Wrapper>
            <HeadingBox>
              <Heading>Rename Folder</Heading>
              <CloseBox>
                <GrFormClose onClick={handleClose}></GrFormClose>
              </CloseBox>
            </HeadingBox>
            <Container>
              <ContentBox>
                <ContentBoxHeadBox>
                  <ContentBoxHead>Folder Name</ContentBoxHead>
                </ContentBoxHeadBox>
                <ContentBoxInput
                  placeholder="Enter new name "
                  onChange={handleChange}
                  value={value}
                ></ContentBoxInput>
                <ContentBoxBtnBox>
                  <ContentBoxBtn onClick={handleClick}>
                    <div>Rename</div>
                  </ContentBoxBtn>
                </ContentBoxBtnBox>
              </ContentBox>
            </Container>
          </Wrapper>
        </Box>
      </Modal>
    </div>
  );
};

const mapDispatchtoProps = (dispatch: Dispatch) => {
  return {
    renameFolder: (e: RenameFolderDataType) => dispatch(renameFolderRequest(e)),
  };
};


export default connect(null, mapDispatchtoProps)(RenameNestedModal);
