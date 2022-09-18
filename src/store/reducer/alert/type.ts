import { fetchGithubUserFaliure, fetchGithubUserSuccess } from "../../actions";

export interface UserDataFail{
    isFailed: boolean
}

export type asyncActionFailureType = ReturnType<typeof fetchGithubUserFaliure>