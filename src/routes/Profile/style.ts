import { Link } from "react-router-dom";
import styled from "styled-components";

interface StylePropsType {
    dp: string
}

export const Wrapper = styled.div`
display: flex;
flex-wrap: wrap;
width:100%;
height:100%;
background:#E6E2EA;
justify-content:center;
font-family: 'Inter', sans-serif;

        @media screen and (max-width:300px)
        {
            align-content:center;
            flex-direction:column;
        }
        @media screen and (min-width:301px) and (max-width:350px)
        {
            align-content:center;
            flex-direction:column;
        }
        @media screen and (min-width:351px) and (max-width:400px)
        {
            align-content:center;
            flex-direction:column;
        }
        @media screen and (min-width:401px) and (max-width:450px)
        {
            align-content:center;
            flex-direction:column;
        }
        @media screen and (min-width:401px) and (max-width:450px)
        {
            align-content:center;
            flex-direction:column;
        }
`

export const ProfileContainer = styled.div`
width:20%;
height:350px;
display:flex;
flex-direction:column;
align-items:center;
margin:25px 35px;
background:#F5F5F5;
border-radius: 10px;
transition: all 0.1s;
    &:hover  {
        transform:scale(1.1)
    }
        @media screen and (max-width:300px)
        {
            height:225px;
            width:70%;
        }
        @media screen and (min-width:301px) and (max-width:350px)
        {
            height:250px;
            width:70%;
        }
        @media screen and (min-width:351px) and (max-width:400px)
        {
            height:300px;
            width:70%;
        }
        @media screen and (min-width:401px) and (max-width:450px)
        {
            height:325px;
            width:70%;
        }
        @media screen and (min-width:401px) and (max-width:450px)
        {
            height:325px;
            width:70%;
        }
        @media screen and (min-width:451px) and (max-width:600px)
        {
            height:225px;
            width:35%;
            margin:15px 15px;
        }
        @media screen and (min-width:601px) and (max-width:750px)
        {
            height:200px;
            width:25%;
            margin:15px 10px;
        }
        @media screen and (min-width:751px) and (max-width:900px)
        {
            height:225px;
            width:25%;
            margin:15px 10px;
        }
        @media screen and (min-width:901px) and (max-width:1050px)
        {
            height:250px;
            width:25%;
            margin:15px 10px;
        }
        @media screen and (min-width:1051px) and (max-width:1250px)
        {
            height:300px;
            width:25%;
            margin:15px 10px;
        }
`

export const ProfilePicture = styled.div`
height:250px;
width:250px;
background:url(${(props: StylePropsType) => props.dp});
background-size:cover;
margin:15px 0px;

    @media screen and (max-width:300px)
    {
        height:150px;
        width:150px;
    }
    @media screen and (min-width:301px) and (max-width:350px)
    {
        height:175px;
        width:175px;
    }
    @media screen and (min-width:351px) and (max-width:400px)
    {
        height:225px;
        width:225px;
    }
    @media screen and (min-width:501px) and (max-width:600px)
    {
        height:250px;
        width:250px;
    }
    @media screen and (min-width:451px) and (max-width:600px)
    {
        height:150px;
        width:150px;
        margin:10px 0px;
    }
    @media screen and (min-width:601px) and (max-width:750px)
    {
        height:150px;
        width:150px;
        margin:10px 0px;
    }
    @media screen and (min-width:751px) and (max-width:900px)
    {
        height:175px;
        width:175px;
        margin:10px 0px;
    }
    @media screen and (min-width:901px) and (max-width:1050px)
    {
        height:200px;
        width:200px;
        margin:10px 0px;
    }
    @media screen and (min-width:1051px) and (max-width:1250px)
    {
        height:250px;
        width:250px;
        margin:10px 0px;
    }
`
export const ProfileDetailes = styled.div`
display:flex;
flex-direction:column;
justify-content:center;
`

export const UsernameContainer = styled.div`
width:100%;
font-size:20px;
font-weight:bold;
`

