import { addFolderRequest, addFolderSuccess, createBookmarkRequest, deleteBookmarkRequest, deleteFolderRequest, deleteFolderSuccess, getBookmarkRequest, getBookmarkSuccess, getFolderRequest, getFolderSuccess, renameFolderRequest } from "../../actions";

export interface FolderDataType{
    name:string,
}

export interface createBookmarkDatatype{
    name:string,
    folderId:string
}

export interface FolderArray{
    folders:any[],
    bookmarks:any[],
    favBookmarks:any[],
    toggleFolderSpinner:boolean,
    toggleBookmarkSpinner:boolean,
    toggleSpinner:boolean,
    toggleRenameSpinner:boolean,
    folderName:string
}

export interface RenameFolderDataType{
    folderId:string,
    name:string
}

export interface DeleteFolderDataType{
    folderId:string,
}

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

export type actionTypes = ReturnType<typeof addFolderRequest | typeof getFolderRequest | typeof getFolderSuccess | typeof renameFolderRequest | typeof deleteFolderRequest | typeof deleteFolderSuccess | typeof getBookmarkRequest | typeof createBookmarkRequest| typeof getBookmarkRequest| typeof getBookmarkSuccess | typeof deleteBookmarkRequest>