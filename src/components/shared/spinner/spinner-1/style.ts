import styled from "styled-components";

interface SpinnerProps{
    component:string;
}

export const SpinnerContainer = styled.div`
position:${(props:SpinnerProps)=>props.component==='bookmarks'?"fixed":"relative"};
top:${(props:SpinnerProps)=>props.component==='folders'?"45%":props.component==="modals"?"45%":"70%"};
left:${(props:SpinnerProps)=>props.component==='folders'?"40%":props.component==="modals"?"45%":"60%"};
right:${(props:SpinnerProps)=>props.component==='folders'?"60%":props.component==="modals"?"45%":"40%"};
bottom:${(props:SpinnerProps)=>props.component==='folders'?"45%":props.component==="modals"?"45%":"30%"};
`