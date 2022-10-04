import { Urls } from "../../asset/dataUrls/index"
import { CreateBookmarkDataType, MoveBookmarksDataType, ToggleFavoriteBookmarksDataType } from "../../store/reducer/bookmarks/type";
import { FolderDataType } from "../../store/reducer/folder/type";
import { LoginDataType , SignUpDataType } from "../../store/reducer/userAuth/type";

export const apiData = async ( api:string, method:string, payload?:LoginDataType|SignUpDataType|FolderDataType|MoveBookmarksDataType|CreateBookmarkDataType|ToggleFavoriteBookmarksDataType,)=>{
    
        const response = await fetch(`${Urls.bookmarks}`+`${api}` ,{
            method:method,
            body:JSON.stringify(payload),
            headers:{
                "Content-Type" : "application/json",
                "Accept" : "*/*",
                "Authorization": `Bearer ` + localStorage.getItem("authToken")
            }
        })
        const data = await response.json();
        return data;
}