import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { Dispatch } from 'redux'
import DashBoardLeft from '../../components/DashBoardLeft'
import DashBoardRight from '../../components/DashBoardRight'
import { getMeRequest } from '../../store/actions'
import { Wrapper } from './style'

interface PropsType{
  getMe:()=>void;
}

const DashBoard = (props:PropsType) => {
  const [id, setId] = useState("");
  const [getFav, setGetFav] = useState(false);
  const [bookmarksAvailable, setBookmarksAvailable] = useState(false);
  
  useEffect(() => {
    props.getMe();
  }, [])
  
  const folderId = (e:string) =>{
    setId(e);
  } 

  const handleFavorite = () =>{
    setGetFav(!getFav);
    console.log(getFav);
    
  }

  const handleCantDelete = (e:boolean) =>{
    setBookmarksAvailable(e);
    setTimeout(() => {
      setBookmarksAvailable(false);
    }, 3000);
  }

  return (
    <Wrapper>
      <DashBoardLeft handleFav={()=>handleFavorite()} favStatus={getFav} isBookmarksAvailable={(e:boolean)=>handleCantDelete(e)}></DashBoardLeft>
      <DashBoardRight folderId={id} showFav={getFav} bookmarksPresent={bookmarksAvailable}></DashBoardRight>
    </Wrapper>
  )
}

const mapDispatchtoProps = (dispatch: Dispatch) => {
  return {
    getMe: ()=>(dispatch(getMeRequest()))
  };
};


export default connect(null, mapDispatchtoProps)(DashBoard);