import { addFolderRequest, addFolderSuccess, deleteFolderRequest, deleteFolderSuccess, getBookmarkRequest, getFolderRequest, getFolderSuccess, renameFolderRequest } from "../../actions";

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


export type actionTypes = ReturnType<typeof addFolderRequest | typeof getFolderRequest | typeof getFolderSuccess | typeof renameFolderRequest | typeof deleteFolderRequest | typeof deleteFolderSuccess | typeof getBookmarkRequest>