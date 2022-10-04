import { createBookmarkRequest, deleteBookmarkRequest, getBookmarkRequest, getBookmarkSuccess } from "../../actions";

export interface BookmarkDataType{
    url:string,
    name:string,
    folderId:string,
}
export interface CreateBookmarkDataType{
    url:string,
    name:string,
}

export interface BookmarkArray{
    bookmarks:any[],
}

export interface DeleteBookmarkType{
    bookmarkId:string
}

export interface RenameBookmarkDataType{
    bookmarkId:string,
    name:string
}

export interface GetBookmarkDataType{
    folderId:string,
    folderName:string,
}

export interface MoveBookmarksDataType{
    folderId:string,
    bookmarkId:string
}

export interface ToggleFavoriteBookmarksDataType{
    bookmarkId:string,
}

export type actionTypes = ReturnType<typeof createBookmarkRequest| typeof getBookmarkRequest| typeof getBookmarkSuccess | typeof deleteBookmarkRequest>