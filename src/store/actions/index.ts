import { Actions } from '../actionTypes/index'
import { BookmarkDataType, CreateBookmarkDataType, DeleteBookmarkType, GetBookmarkDataType, MoveBookmarksDataType, ToggleFavoriteBookmarksDataType } from '../reducer/folder/type'
import { FolderDataType, RenameFolderDataType } from '../reducer/folder/type'
import { LoginDataType, SignUpDataType } from '../reducer/userAuth/type'

export const signUpRequest = (e: SignUpDataType) => {

    return {
        type: Actions.SIGN_UP_REQUEST,
        payload: e
    }
}

export const signUpSuccess = (e: any) => {

    return {
        type:Actions.SIGN_UP_SUCCESS,
        payload:e
    }
}

export const loginRequest = (e: LoginDataType) => {

    return {
        type: Actions.LOGIN_REQUEST,
        payload: e
    }
}

export const loginSuccess = (e: any) => {

    return {
        type: Actions.LOGIN_SUCCESS,
        payload: e
    }
}

export const getMeRequest = () =>{
    return{
        type:Actions.GET_ME_REQUEST
    }
}

export const getMeSuccess = (e:any) =>{
    return{
        type:Actions.GET_ME_SUCCESS,
        payload:e
    }
}

export const addFolderRequest = (e: FolderDataType) => {

    return {
        type: Actions.ADD_FOLDER_REQUEST,
        payload: e
    }
}

export const addFolderSuccess = (e: any) => {
    
    return {
        type: Actions.ADD_FOLDER_SUCCESS,
        payload: e
    }
}

export const getFolderRequest = () =>{

    return{
        type: Actions.GET_FOLDER_REQUEST,
        payload:{}
    }
}

export const getFolderSuccess = (e:any) =>{

    return{
        type: Actions.GET_FOLDER_SUCCESS,
        payload: e
    }
}

export const renameFolderRequest = (e:RenameFolderDataType) =>{
    
    return{
        type: Actions.RENAME_FOLDER_REQUEST,
        payload:e

    }
}

export const renameFolderSuccess = (e:any) =>{

    return{
        type: Actions.RENAME_FOLDER_SUCCESS,
        payload:e
    }
}

export const deleteFolderRequest = (e:any) =>{

    return{
        type: Actions.DELETE_FOLDER_REQUEST,
        payload:e
    }
}

export const deleteFolderSuccess = (e:any) =>{

    return{
        type: Actions.DELETE_FOLDER_SUCCESS,
        payload:e
    }
}

export const createBookmarkRequest = (e: BookmarkDataType) => {

    return {
        type: Actions.CREATE_BOOKMARK_REQUEST,
        payload: e
    }
}

export const createBookmarkSuccess = (e: any) => {
    
    return {
        type: Actions.CREATE_BOOKMARK_SUCCESS,
        payload: e
    }
}

export const getBookmarkRequest = (e:GetBookmarkDataType) =>{

    return{
        type: Actions.GET_BOOKMARK_REQUEST,
        payload:e
    }
}

export const getBookmarkSuccess = (e:any) =>{

    return{
        type: Actions.GET_BOOKMARK_SUCCESS,
        payload: e
    }
}

export const deleteBookmarkRequest = (e:DeleteBookmarkType) =>{

    return{
        type: Actions.DELETE_BOOKMARK_REQUEST,
        payload:e
    }
}

export const deleteBookmarkSuccess = (e:any) =>{
    return{
        type: Actions.DELETE_BOOKMARK_SUCCESS,
        payload:e
    }
}

export const moveBookmarkRequest = (e:MoveBookmarksDataType) =>{
    return{
        type: Actions.MOVE_BOOKMARK_REQUEST,
        payload:e
    }
}

export const moveBookmarkSuccess = (e:any) =>{
    return{
        type: Actions.MOVE_BOOKMARK_SUCCESS,
        payload:e
    }
}

export const addFavourite = (e:any)=>{
    
    return{
        type: Actions.ADD_FAVOUITE_BOOKMARK,
        payload:e,
    }
}

export const deleteFavourite = (e:any)=>{
    
    return{
        type: Actions.REMOVE_FAVOUITE_BOOKMARK,
        payload:e,
    }
} 

export const toggleFavoriteRequest = (e:ToggleFavoriteBookmarksDataType)=>{
    return{
        type: Actions.TOGGLE_FAVOURITE_BOOKMARK_REQUEST,
        payload:e
    }
}

export const toggleFavoriteSuccess = (e:ToggleFavoriteBookmarksDataType)=>{
    return{
        type: Actions.TOGGLE_FAVOURITE_BOOKMARK_SUCCESS,
        payload:e
    }
}