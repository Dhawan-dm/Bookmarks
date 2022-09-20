import { Urls } from "../../asset/dataUrls/index"
import { LoginDataType , SignUpDataType } from "../../store/reducer/userAuth/type";

export const apiData = async (payload:LoginDataType|SignUpDataType, api:string, method:string)=>{
    console.log("worked");
        console.log(payload);
        
        const response = await fetch(`${Urls.bookmarks}`+`${api}` ,{
            method:method,
            body:JSON.stringify(payload),
            headers:{
                "Content-Type" : "application/json",
                "Accept" : "application/json"
            }
        })
        const data = await response.json();
        return data;
}