import React, { useState } from "react";

import { connect } from "react-redux";
import { Dispatch } from "redux";

import DashBoardRight from "../../components/DashBoardRightDemo";

import {
  addFolderRequest,
  deleteFolderRequest,
  getBookmarkRequest,
  getFolderRequest,
  renameFolderRequest,
} from "../../store/actions";
import { GetBookmarkDataType } from "../../store/reducer/bookmarks/type";
import {
  DeleteFolderDataType,
  FolderDataType,
  RenameFolderDataType,
} from "../../store/reducer/folder/type";
import { Left, Wrapper } from "./style";

interface ProfileDataType {
  addFolder: (e: FolderDataType) => void;
  getFolder: () => void;
  renameFolder: (e: RenameFolderDataType) => void;
  folders: any[];
  deleteFolder: (e: DeleteFolderDataType) => void;
  // getBookmark:(e: GetBookmarkDataType)=>void;
}

const Folder = (props: ProfileDataType) => {
  const [value, setvalue] = useState("");
  const [renameValue, setRenameValue] = useState("");

  const handleChange = (e: React.FormEvent<HTMLInputElement>) => {
    setvalue(e.currentTarget.value);
  };

  const handleRenameSubmit = (
    e: React.FormEvent<HTMLFormElement>,
    id: string
  ) => {
    e.preventDefault();
    props.renameFolder({ folderId: id, name: renameValue });
  };

  const handleAddSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    props.addFolder({ name: value});
  };

  const handleGetClick = () => {
    props.getFolder();
  };

  const handleGetBookmarkClick = (id:string) => {
    // props.getBookmark({folderId:id});
  };

  const handleDeleteClick = (id: string) => {
    props.deleteFolder({ folderId: id });
  };

  return (
    <Wrapper>
      <Left>
        <form action="" onSubmit={(e) => handleAddSubmit(e)}>
          <input type="text" onChange={handleChange} value={value} />
          <button type="submit">add</button>
        </form>
        <button onClick={handleGetClick}>Get Folders</button>

        <div>
          {props.folders.map((folder: any) => {
            return (
              <li
                key={folder.id}
                style={{ display: "flex", margin: "10px 20px" }}
              >
                {folder.name}
                <form
                  onSubmit={(e) => handleRenameSubmit(e, folder.id)}
                  style={{ margin: "0px 10px" }}
                >
                  <input
                    type="text"
                    onChange={(e: React.FormEvent<HTMLInputElement>) =>
                      setRenameValue(e.currentTarget.value)
                    }
                  />
                  <button type="submit">Rename</button>
                </form>
                <button onClick={()=>handleGetBookmarkClick(folder.id)}>get Bookmarks</button>
                <button onClick={() => handleDeleteClick(folder.id)}>
                  Delete
                </button>
                <div>
                  {folder.url}
                </div>
              </li>
            );
          })}
        </div>
      </Left>
      <DashBoardRight></DashBoardRight>
    </Wrapper>
  );
};

const mapDispaychtoProps = (dispatch: Dispatch) => {
  return {
    addFolder: (e: FolderDataType) => dispatch(addFolderRequest(e)),
    getFolder: () => dispatch(getFolderRequest()),
    renameFolder: (e: RenameFolderDataType) => dispatch(renameFolderRequest(e)),
    deleteFolder: (e: DeleteFolderDataType) => dispatch(deleteFolderRequest(e)),
    // getBookmark: (e :GetBookmarkDataType) => dispatch(getBookmarkRequest(e)),
  };
};
const mapStatetoProps = (state: any) => {
  console.log(state.folderReducer.folders);
  
  return {
    folders: state.folderReducer.folders,
  };
};
export default connect(mapStatetoProps, mapDispaychtoProps)(Folder);
