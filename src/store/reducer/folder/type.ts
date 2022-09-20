import { addFolderRequest, addFolderSuccess } from "../../actions";

export interface FolderDataType{
    name:string
}

export interface FolderArray{
    folders:FolderArray[]
}

export type actionTypes = ReturnType<typeof addFolderRequest| typeof addFolderSuccess>