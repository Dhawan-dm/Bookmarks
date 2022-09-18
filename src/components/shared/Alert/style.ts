import styled from "styled-components";

export const AlertContainer = styled.div`
    display:flex;
    justify-content:center;
    align-content:center;
    padding: 20px;
    background-color: #f1765a;
    color: white;
    margin-bottom: 15px;
    position:fixed;
    top:2%;
    right:30%;
    left:30%;
    border-radius:20px;
    @media screen and (orientation:portrait)
    {
        right:5%;
        left:5%;
    }
`

export const TextContainer = styled.div`
    padding: 2% 2%;
    font-weight:bold;
    @media screen and (orientation:portrait)
    {
        font-size:15px;
    }
    @media screen and (min-width:280px) and (max-width:400px)
    {
        font-size:12px;
    }
    @media screen and (min-width:700px) and (max-width:1000px)
    {
        font-size:12px;
    }
`