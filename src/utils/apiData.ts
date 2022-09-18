import { Urls } from "../asset/dataUrls";

export const fetchData = async ()=>{
        const response = await fetch(Urls.githubUsers)
        const data = await response.json();
        return data;
}