import { Urls } from "../../asset/dataUrls/index"
import { FolderDataType } from "../../store/reducer/folder/type";
import { LoginDataType , SignUpDataType } from "../../store/reducer/userAuth/type";

export const apiData = async ( api:string, method:string, payload?:LoginDataType|SignUpDataType|FolderDataType,)=>{
    console.log("worked");
        console.log(payload);
        
        const response = await fetch(`${Urls.bookmarks}`+`${api}` ,{
            method:method,
            body:JSON.stringify(payload),
            headers:{
                "Content-Type" : "application/json",
                "Accept" : "application/json",
                "Authorization": `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjIyMjMwNjFkLTY1NGItNDg1Ni1iYzUxLWIyMjkyNzBmODFlMiIsImVtYWlsIjoiYXJ5YW5AZ2x1ZWxhYnMuY29tIiwiZXhwIjoxNjY4ODkwNDkwLCJpYXQiOjE2NjM3MDY0OTB9.KheAhLxjs-6WvKppInWrnqk5fBETqCivf8C29nxfZ-g`
            }
        })
        const data = await response.json();
        return data;
}