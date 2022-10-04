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
import { FolderDataType } from "../../../../store/reducer/folder/type";
import { addFolderRequest } from "../../../../store/actions";
import { Dispatch } from "redux";
import { GrFormClose } from "react-icons/gr";
import Spinner from "../../spinner/spinner-1";
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
  addFolder: (e: FolderDataType) => void;
  folderId: string;
  close: () => void;
  toggleSpinner:boolean
}

const CreateNestedModal = (props: PropsType) => {
  const [value, setValue] = useState("");
  const handleChange = (e: React.FormEvent<HTMLInputElement>) => {
    setValue(e.currentTarget.value);
  };

  const handleClose = () => {
    props.close();
  };
  const handleClick = () => {
    props.addFolder({ name: value });
    setValue("");
    props.close();
  };

  return (
    <div>
      <Modal open={!props.toggleSpinner?props.open:true}>
        <Box sx={{ ...style, width: "20%", borderRadius: "20px" }}>
          <Wrapper>
            <HeadingBox>
              <Heading>Add Folder</Heading>
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
                  placeholder="Enter Folder name "
                  onChange={handleChange}
                  value={value}
                ></ContentBoxInput>
                <ContentBoxBtnBox>
                  <ContentBoxBtn onClick={handleClick}>
                    {props.toggleSpinner?<Spinner2 component="dashboard"></Spinner2>
                    :<div>Save</div>}</ContentBoxBtn>
                </ContentBoxBtnBox>
              </ContentBox>
            </Container>
          </Wrapper>
        </Box>
      </Modal>
    </div>
  );
};

const mapDispaychtoProps = (dispatch: Dispatch) => {
  return {
    addFolder: (e: FolderDataType) => dispatch(addFolderRequest(e)),
  };
};

const mapStatetoProps = (state: any) => {
  return {
    toggleSpinner: state.folderReducer.toggleSpinner,
  };
};

export default connect(mapStatetoProps, mapDispaychtoProps)(CreateNestedModal);
