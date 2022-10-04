import React, { useState } from "react";

import { connect } from "react-redux";
import { Dispatch } from "redux";

import { createBookmarkRequest, deleteBookmarkRequest, getBookmarkRequest } from "../../store/actions";
import { BookmarkDataType, DeleteBookmarkType } from "../../store/reducer/bookmarks/type";
import { Wrapper } from "./style";

interface ProfileDataType {
  addBookmark: (e: BookmarkDataType) => void;
  deleteBookmark: (e:DeleteBookmarkType) => void
  bookmarks: any[];
}

const DashBoardRight = (props: ProfileDataType) => {
  const [nameValue, setNameValue] = useState("");
  const [urlValue, setUrlValue] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    props.addBookmark({ url: urlValue, name: nameValue, folderId:"" });
  };

  const handleDeleteClick = (id:string) => {
    props.deleteBookmark({bookmarkId:id});
  }

  return (
    <Wrapper>
      <div>
        <form action="" onSubmit={(e) => handleSubmit(e)}>
          <input
            type="text"
            onChange={(e: React.FormEvent<HTMLInputElement>) =>
              setUrlValue(e.currentTarget.value)
            }
            value={urlValue}
          />
          <input
            type="text"
            onChange={(e: React.FormEvent<HTMLInputElement>) =>
              setNameValue(e.currentTarget.value)
            }
            value={nameValue}
          />
          <button type="submit">add</button>
        </form>
        <div>
          {props.bookmarks.map((bookmark: any) => {
            return (
              <li
                key={bookmark.id}
                style={{ display: "flex", margin: "10px 20px" }}
              >
                {bookmark.name}
                <button onClick={()=>handleDeleteClick(bookmark.id)} style={{margin:"0px 10px"}}>Delete</button>
              </li>
            );
          })}
        </div>
      </div>
      
    </Wrapper>
  );
};

const mapDispaychtoProps = (dispatch: Dispatch) => {
  return {
    addBookmark: (e: BookmarkDataType) => dispatch(createBookmarkRequest(e)),
    deleteBookmark: (e:DeleteBookmarkType) => dispatch(deleteBookmarkRequest(e))
  };
};
const mapStatetoProps = (state: any) => {
  return {
    bookmarks: state.bookmarkReducer.bookmarks,
  };
};
export default connect(mapStatetoProps, mapDispaychtoProps)(DashBoardRight);
