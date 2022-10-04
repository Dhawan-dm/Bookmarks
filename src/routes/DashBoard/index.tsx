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

  return (
    <Wrapper>
      <DashBoardLeft handleFav={()=>handleFavorite()} favStatus={getFav} ></DashBoardLeft>
      <DashBoardRight folderId={id} showFav={getFav} ></DashBoardRight>
    </Wrapper>
  )
}

const mapDispatchtoProps = (dispatch: Dispatch) => {
  return {
    getMe: ()=>(dispatch(getMeRequest()))
  };
};


export default connect(null, mapDispatchtoProps)(DashBoard);