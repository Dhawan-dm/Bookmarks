import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { Dispatch } from "redux";
import { FiSearch } from "react-icons/fi";
import { BsPlus } from "react-icons/bs";
import { BsJournalBookmarkFill } from "react-icons/bs";
import { AiFillHeart } from "react-icons/ai";
import { AiOutlineHeart } from "react-icons/ai";
import { BsFolder } from "react-icons/bs";
import { RiDeleteBin6Line } from "react-icons/ri";
import { FaGripHorizontal } from "react-icons/fa";
import { GoAlert } from "react-icons/go";
import { BsListUl } from "react-icons/bs";
import { v4 as uuidv4 } from "uuid";
import {
  addFavourite,
  addFolderRequest,
  createBookmarkRequest,
  deleteBookmarkRequest,
  deleteFavourite,
  getBookmarkRequest,
  getFolderRequest,
  moveBookmarkRequest,
  toggleFavoriteRequest,
} from "../../store/actions";
import {
  BookmarkDataType,
  DeleteBookmarkType,
  GetBookmarkDataType,
  MoveBookmarksDataType,
  ToggleFavoriteBookmarksDataType,
} from "../../store/reducer/folder/type";
import {
  DeleteFolderDataType,
  FolderDataType,
} from "../../store/reducer/folder/type";
import FolderNestedModal from "../shared/Modlas/Folders";
import Spinner from "../shared/spinner/spinner-1";
import LongMenu from "../shared/Menu/index";
import {
  AddFavBox,
  AddFolder,
  AddFolderBox,
  AddFolderBoxIcon,
  BookmarkIcon,
  BookmarkIconVertical,
  ContainerBottom,
  ContainerBottomBox,
  ContainerBoxRight,
  ContainerMid,
  ContainerMidAddLinkBox,
  ContainerMidContentBox,
  ContainerMidIconBox,
  ContainerMidInput,
  ContainerMidInputBox,
  ContainerNoBookmark,
  ContainerNoBookmarkDetails,
  ContainerNoBookmarkHead,
  ContainerNoBookmarkIconBox,
  ContainerNoBookmarkText,
  ContainerNoBookmarkTextBox,
  ContainerTop,
  ContentBox,
  ContentBoxLeft,
  DescBox,
  Folder,
  FolderBox,
  FolderBtn,
  FolderBtnBox,
  FolderHeading,
  FolderHeadingBox,
  FolderInput,
  FolderInputBox,
  Heading,
  HeadingBox,
  ImageBox,
  InfoBox,
  InfoDescBox,
  InfoTitle,
  InfoTitleBox,
  InfoTop,
  LinkBox,
  LinkToBookmark,
  NavBox,
  ProfileBox,
  ProfileDp,
  ProfileInfoBox,
  ToggleViewBox,
  ToggleViewIconBoxA,
  Url,
  UrlBox,
  UrlHeading,
  UrlInput,
  UrlInputBox,
  UserMail,
  UserName,
  VerticalIcon1,
  Wrapper,
} from "./style";
import { SignUpDataType } from "../../store/reducer/userAuth/type";

interface PropsType {
  addFolder: (e: FolderDataType) => void;
  getFolder: () => void;
  addBookmark: (e: BookmarkDataType) => void;
  getBookmark: (e: GetBookmarkDataType) => void;
  addFavBookmark: (e: any) => void;
  deleteFavBookmark: (e: any) => void;
  toggleFavorite: (e: ToggleFavoriteBookmarksDataType) => void;
  bookmarks: [];
  folderId: string;
  users: SignUpDataType;
  toggleSpinner: boolean;
  showFav: boolean;
  favBookmarks: [];
  folderName: string;
  moveBookmark: (e: MoveBookmarksDataType) => void;
  deleteBookmark: (e: DeleteBookmarkType) => void;
  bookmarksPresent:boolean
}

const DashBoardRight = (props: PropsType) => {
  const [bookmarkValue, setBookmark] = useState("");
  const [bookmarkName, setBookmarkName] = useState("");
  const [folderValue, setFolder] = useState("");
  const [folderName, setFolderName] = useState("");
  const [folderId, setFolderId] = useState("");
  const [addOpen, setaddOpen] = useState(false);
  const [moveCall, setMoveCall] = useState(false);
  const [bookmarkId, setBookmarkId] = useState("");
  const [layout, setLayout] = useState(false);

  if (folderName != props.folderName) {
    setFolder(props.folderName);
    setFolderName(props.folderName);
  }

  const handleSave = () => {
    if (bookmarkValue === "") {
      props.addFolder({ name: folderValue });
      setFolder("");
    } else {
      props.addBookmark({
        url: bookmarkValue,
        name: bookmarkName,
        folderId: folderId,
      });
      setBookmarkName("");
      setBookmark("");
      console.log(folderId);
    }
  };

  const handleFolderInfo = (id: string, name: string) => {
    if (!moveCall) {
      setFolderId(id);
      setFolder(name);
    } else {
      props.moveBookmark({ folderId: id, bookmarkId: bookmarkId });
      setBookmarkId("");
      setMoveCall(false);
    }
  };

  const handleMove = (id: string) => {
    setaddOpen(true);
    setMoveCall(true);
    setBookmarkId(id);
  };

  const handleDelete = (id: string) => {
    props.deleteBookmark({ bookmarkId: id });
  };

  const handleOpen = () => {
    setaddOpen(true);
  };

  const handleModalClose = () => {
    setaddOpen(false);
  };

  const handleClickFav = (bookmark: any) => {
    if (bookmark.isFavorite) {
      props.deleteFavBookmark(bookmark);
    } else {
      props.addFavBookmark(bookmark);
    }
    props.toggleFavorite({ bookmarkId: bookmark.id });
  };

  const handleView = () =>{
    setLayout(!layout);
  }

  return (
    <Wrapper>
      <NavBox>
        <ProfileBox>
          <ProfileDp></ProfileDp>
          
              <ProfileInfoBox>
                <UserName>{props.users.name}</UserName>
                <UserMail>{props.users.email}</UserMail>
              </ProfileInfoBox>
        </ProfileBox>
      </NavBox>
      <ContainerTop>
        <ContentBox>
          <ContentBoxLeft>
            <HeadingBox>
              <Heading>Add Quick Link</Heading>
            </HeadingBox>
            <UrlBox>
              <UrlHeading>
                <Url>URL</Url>
              </UrlHeading>
              <UrlInputBox>
                <UrlInput
                  onChange={(e: React.FormEvent<HTMLInputElement>) =>
                    setBookmark(e.currentTarget.value)
                  }
                  value={bookmarkValue}
                  placeholder="Bookmark url"
                ></UrlInput>
              </UrlInputBox>
            </UrlBox>
            <FolderBox>
              <FolderHeadingBox>
                <FolderHeading>
                  <Folder>BOOKMARK NAME</Folder>
                </FolderHeading>
                <FolderHeading>
                  <Folder>FOLDER NAME</Folder>
                </FolderHeading>
              </FolderHeadingBox>
              <FolderInputBox>
                <FolderInput
                  onChange={(e: React.FormEvent<HTMLInputElement>) =>
                    setBookmarkName(e.currentTarget.value)
                  }
                  value={bookmarkName}
                  placeholder={"Bookmark name"}
                ></FolderInput>
                <FolderInput
                  onChange={(e: React.FormEvent<HTMLInputElement>) =>
                    setFolder(e.currentTarget.value)
                  }
                  onClick={handleOpen}
                  value={folderValue}
                  placeholder={"Folder name"}
                ></FolderInput>
                <FolderBtnBox>
                  <FolderBtn onClick={handleSave} disabled={!bookmarkValue}>Save</FolderBtn>
                </FolderBtnBox>
              </FolderInputBox>
            </FolderBox>
          </ContentBoxLeft>
          <ContainerBoxRight></ContainerBoxRight>
        </ContentBox>
      </ContainerTop>
      <ContainerMid>
        <ContainerMidContentBox>
          <ContainerMidInputBox>
            <ContainerMidIconBox>
              <FiSearch size={"40%"}></FiSearch>
            </ContainerMidIconBox>
            <ContainerMidInput placeholder="Search.."></ContainerMidInput>
          </ContainerMidInputBox>
          <ContainerMidAddLinkBox>
            <AddFolderBox>
              <AddFolderBoxIcon>
                <BsPlus></BsPlus>
              </AddFolderBoxIcon>
              <AddFolder>ADD LINK</AddFolder>
            </AddFolderBox>
          </ContainerMidAddLinkBox>
          <ToggleViewBox onClick={handleView}>
                  {layout?(
                    <><ToggleViewIconBoxA select = {true}><FaGripHorizontal color={"#FFFFFF"} size={"50%"}></FaGripHorizontal></ToggleViewIconBoxA>
                    <ToggleViewIconBoxA select={false}><BsListUl size={"50%"} color={"#77757F"}></BsListUl></ToggleViewIconBoxA></>
                  ):(
                    <><ToggleViewIconBoxA select = {false}><FaGripHorizontal color={"#77757F"} size={"50%"}></FaGripHorizontal></ToggleViewIconBoxA>
                    <ToggleViewIconBoxA select = {true}><BsListUl size={"50%"} color={"#FFFFFF"}></BsListUl></ToggleViewIconBoxA></>
                  )}
          </ToggleViewBox>
        </ContainerMidContentBox>
      </ContainerMid>
      <ContainerBottom view={props.toggleSpinner ? "opaque" : "normal"}>
        <ContainerBottomBox>
          {props.bookmarksPresent || (props.bookmarks.length === 0 && !props.showFav) ? (
            <ContainerNoBookmark >
              <ContainerNoBookmarkIconBox>
                {!props.bookmarksPresent?
                <BsJournalBookmarkFill
                  size={"70%"}
                  color={"#5352ED"}
                ></BsJournalBookmarkFill>:
                <GoAlert
                  size={"70%"}
                  color={"#5352ED"}>
                  </GoAlert>}
              </ContainerNoBookmarkIconBox>
              <ContainerNoBookmarkDetails>
                <ContainerNoBookmarkHead>
                {!props.bookmarksPresent?
                  <div>Click on folder with bookmark</div>:
                  <div>Can't delete folder with bookmarks</div>}
                </ContainerNoBookmarkHead>
                <ContainerNoBookmarkTextBox>
                  <ContainerNoBookmarkText>
                    Keep content organized with folders and subfolder
                  </ContainerNoBookmarkText>
                </ContainerNoBookmarkTextBox>
              </ContainerNoBookmarkDetails>
            </ContainerNoBookmark>
          ) : !props.showFav ? (
            props.bookmarks.map((bookmark: any) => {
              return (
                <LinkToBookmark
                  key={bookmark.id }
                  mode={layout ? "horizontal" : "vertical"}
                >
                  <ImageBox
                    to={bookmark.url}
                    image={bookmark.imageUrl}
                    mode={layout ? "horizontal" : "vertical"}
                  ></ImageBox>
                  <InfoBox mode={layout ? "horizontal" : "vertical"}>
                    <InfoTop>
                      <InfoTitleBox>
                        <InfoTitle>{bookmark.name}</InfoTitle>
                      </InfoTitleBox>
                      <BookmarkIcon mode={layout ? "horizontal" : "vertical"}>
                        <LongMenu
                          folderId={props.folderId}
                          component={"right"}
                          bookmarkId={bookmark.id}
                          bookmarksAvailable={(e:boolean)=>""}
                        ></LongMenu>
                      </BookmarkIcon>
                    </InfoTop>
                    <InfoDescBox mode={layout ? "horizontal" : "vertical"}>
                      <DescBox>
                        {bookmark.description ? (
                          <div>bookmark.description</div>
                        ) : (
                          <div>
                            Lorem ipsum dolor sit, amet consectetur adipisicing
                            elit. Architecto fuga vitae perferendis
                            consequuntur. Animi officia quo, quibusdam minus
                            reprehenderit labore perferendis repellendus.
                            Perferendis doloribus ipsam hic harum laudantium id
                            recusandae!
                          </div>
                        )}
                      </DescBox>
                    </InfoDescBox>
                    <LinkBox mode={layout ? "horizontal" : "vertical"}>
                      <AddFavBox>
                        {bookmark.isFavorite ? (
                          <AiFillHeart
                            size={"100%"}
                            color={"#E01A1A"}
                            onClick={() => handleClickFav(bookmark)}
                          ></AiFillHeart>
                        ) : (
                          <AiOutlineHeart
                            size={"100%"}
                            color={"#E01A1A"}
                            onClick={() => handleClickFav(bookmark)}
                          ></AiOutlineHeart>
                        )}
                      </AddFavBox>
                    </LinkBox>
                  </InfoBox>
                  <BookmarkIconVertical
                    mode={layout ? "horizontal" : "vertical"}
                  >
                    <VerticalIcon1>
                      {bookmark.isFavorite ? (
                        <AiFillHeart
                          size={"30%"}
                          color={"#9D9B9F"}
                          onClick={() => handleClickFav(bookmark)}
                        ></AiFillHeart>
                      ) : (
                        <AiOutlineHeart
                          size={"30%"}
                          color={"#9D9B9F"}
                          onClick={() => handleClickFav(bookmark)}
                        ></AiOutlineHeart>
                      )}
                    </VerticalIcon1>
                    <VerticalIcon1 onClick={() => handleMove(bookmark.id)}>
                      <BsFolder size={"25%"} color="9D9B9F"></BsFolder>
                    </VerticalIcon1>
                    <VerticalIcon1 onClick={() => handleDelete(bookmark.id)}>
                      <RiDeleteBin6Line
                        size={"25%"}
                        color="9D9B9F"
                      ></RiDeleteBin6Line>
                    </VerticalIcon1>
                  </BookmarkIconVertical>
                </LinkToBookmark>
              );
            })
          ) : (
            props.favBookmarks.map((bookmark: any) => {
              return (
                <LinkToBookmark
                  key={uuidv4()}
                  mode={layout ? "horizontal" : "vertical"}
                >
                  <ImageBox
                    to={"/"}
                    image={bookmark.imageUrl}
                    mode={layout ? "horizontal" : "vertical"}
                  ></ImageBox>
                  <InfoBox mode={layout ? "horizontal" : "vertical"}>
                    <InfoTop>
                      <InfoTitleBox>
                        <InfoTitle>{bookmark.name}</InfoTitle>
                      </InfoTitleBox>
                      <BookmarkIcon mode={layout ? "horizontal" : "vertical"}>
                        <LongMenu
                          folderId={props.folderId}
                          component={"right"}
                          bookmarkId={bookmark.id}
                          bookmarksAvailable={(e:boolean)=>""}
                        ></LongMenu>
                      </BookmarkIcon>
                    </InfoTop>
                    <InfoDescBox mode={layout ? "horizontal" : "vertical"}>
                      <DescBox>
                        {bookmark.description ? (
                          <div>bookmark.description</div>
                        ) : (
                          <div>
                            Lorem ipsum dolor sit, amet consectetur adipisicing
                            elit. Architecto fuga vitae perferendis
                            consequuntur. Animi officia quo, quibusdam minus
                            reprehenderit labore perferendis repellendus.
                            Perferendis doloribus ipsam hic harum laudantium id
                            recusandae!
                          </div>
                        )}
                      </DescBox>
                    </InfoDescBox>
                    <LinkBox mode={layout ? "horizontal" : "vertical"}>
                      <AddFavBox>
                        {bookmark.isFavorite ? (
                          <AiFillHeart
                            size={"100%"}
                            color={"#E01A1A"}
                            onClick={() => handleClickFav(bookmark)}
                          ></AiFillHeart>
                        ) : (
                          <AiOutlineHeart
                            size={"100%"}
                            color={"#E01A1A"}
                            onClick={() => handleClickFav(bookmark)}
                          ></AiOutlineHeart>
                        )}
                      </AddFavBox>
                    </LinkBox>
                  </InfoBox>
                  <BookmarkIconVertical
                    mode={layout ? "horizontal" : "vertical"}
                  >
                    <VerticalIcon1>
                      {bookmark.isFavorite ? (
                        <AiFillHeart
                          size={"30%"}
                          color={"#9D9B9F"}
                          onClick={() => handleClickFav(bookmark)}
                        ></AiFillHeart>
                      ) : (
                        <AiOutlineHeart
                          size={"30%"}
                          color={"#9D9B9F"}
                          onClick={() => handleClickFav(bookmark)}
                        ></AiOutlineHeart>
                      )}
                    </VerticalIcon1>
                    <VerticalIcon1 onClick={() => handleMove(bookmark.id)}>
                      <BsFolder size={"25%"} color="9D9B9F"></BsFolder>
                    </VerticalIcon1>
                    <VerticalIcon1 onClick={() => handleDelete(bookmark.id)}>
                      <RiDeleteBin6Line
                        size={"25%"}
                        color="9D9B9F"
                      ></RiDeleteBin6Line>
                    </VerticalIcon1>
                  </BookmarkIconVertical>
                </LinkToBookmark>
              );
            })
          )}
        </ContainerBottomBox>
      </ContainerBottom>
      <FolderNestedModal
        open={addOpen}
        getFolderInfo={(id: string, name: string) => handleFolderInfo(id, name)}
        close={() => handleModalClose()}
      ></FolderNestedModal>
      {props.toggleSpinner ? <Spinner component={"bookmarks"} /> : <></>}
    </Wrapper>
  );
};

const mapDispatchtoProps = (dispatch: Dispatch) => {
  return {
    addFolder: (e: FolderDataType) => dispatch(addFolderRequest(e)),
    getFolder: () => dispatch(getFolderRequest()),
    addBookmark: (e: BookmarkDataType) => dispatch(createBookmarkRequest(e)),
    getBookmark: (e: GetBookmarkDataType) => dispatch(getBookmarkRequest(e)),
    addFavBookmark: (e: any) => dispatch(addFavourite(e)),
    deleteFavBookmark: (e: any) => dispatch(deleteFavourite(e)),
    toggleFavorite: (e: ToggleFavoriteBookmarksDataType) =>
      dispatch(toggleFavoriteRequest(e)),
    moveBookmark: (e: MoveBookmarksDataType) =>
      dispatch(moveBookmarkRequest(e)),
    deleteBookmark: (e: DeleteBookmarkType) =>
      dispatch(deleteBookmarkRequest(e)),
  };
};
const mapStatetoProps = (state: any) => {
  return {
    folders: state.folderReducer.folders,
    bookmarks: state.folderReducer.bookmarks,
    favBookmarks: state.folderReducer.favBookmarks,
    users: state.authReducer.users,
    toggleSpinner: state.folderReducer.toggleBookmarkSpinner,
    folderName: state.folderReducer.folderName,
  };
};
export default connect(mapStatetoProps, mapDispatchtoProps)(DashBoardRight);
