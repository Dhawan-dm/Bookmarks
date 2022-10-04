import * as React from 'react';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import './style.css'
import RenameNestedModal from '../Modlas/Rename';
import { useState } from 'react';
import { Dispatch } from 'redux';
import { DeleteFolderDataType } from '../../../store/reducer/folder/type';
import { deleteBookmarkRequest, deleteFolderRequest, moveBookmarkRequest } from '../../../store/actions';
import { connect } from 'react-redux';
import { DeleteBookmarkType, MoveBookmarksDataType } from '../../../store/reducer/bookmarks/type';
import FolderNestedModal from "../Modlas/Folders";

interface PropsType{
    folderId:string,
    deleteFolder:(e: DeleteFolderDataType)=>void,
    deleteBookmark:(e: DeleteBookmarkType)=>void,
    moveBookmark:(e:MoveBookmarksDataType)=>void,
    component:string,
    bookmarkId:string,
}
const ITEM_HEIGHT = 48;


 const LongMenu = (props:PropsType)=> {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const [renameOpen, setrenameOpen] = useState(false)
  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleRenameMove = () =>{
    setrenameOpen(true);
  }
  const handleModalClose = () =>{
    setrenameOpen(false);
  }
  const handleDelete = () =>{
    if(props.component === "left")
    {
      props.deleteFolder({folderId:props.folderId})
    }
    else{
      props.deleteBookmark({bookmarkId:props.bookmarkId})
    }
  }

  const handleFolderInfo = (id:string, name:string)=>{
    props.moveBookmark({folderId:id, bookmarkId:props.bookmarkId})
  }

  return (
    <div>
      <IconButton
        onClick={handleClick}
      >
        <MoreVertIcon />
      </IconButton>
      <Menu 
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        PaperProps={{
          style: {
            maxHeight: ITEM_HEIGHT * 4.5,
            width: '20ch',
            borderRadius:'20px'
          },
        }}
      >
          <MenuItem  onClick={()=>{
            handleClose();
            handleRenameMove();}}>
            {props.component ==="left"? <div>Rename</div> : (<div>Move</div>)}
          </MenuItem>
          <MenuItem onClick={handleDelete} >
            Delete
          </MenuItem>
        
      </Menu>
      {props.component === "left"?
        <RenameNestedModal open={renameOpen} folderId={props.folderId} close={()=>handleModalClose()}></RenameNestedModal>:
        <FolderNestedModal
        open={renameOpen}
        getFolderInfo={(id: string, name: string) => handleFolderInfo(id, name)}
        close={() => handleModalClose()}
      ></FolderNestedModal>
      }
    </div>
  );
}

const mapDispaychtoProps = (dispatch: Dispatch) => {
  return {
    deleteFolder: (e: DeleteFolderDataType) => dispatch(deleteFolderRequest(e)),
    deleteBookmark: (e:DeleteBookmarkType) => dispatch(deleteBookmarkRequest(e)),
    moveBookmark:(e:MoveBookmarksDataType) => dispatch(moveBookmarkRequest(e))
  };
};

export default connect(null, mapDispaychtoProps)(LongMenu)