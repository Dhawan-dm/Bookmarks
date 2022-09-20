import React, { useState } from 'react';

import { connect } from 'react-redux';
import { Dispatch } from 'redux';

import { addFolderRequest, getFolderRequest, } from '../../store/actions';
import { FolderDataType } from '../../store/reducer/folder/type';

interface ProfileDataType{
  addFolder:(e:FolderDataType)=>void,
  getFolder:()=>void
}

const Folder = (props:ProfileDataType) =>{

  const [value, setvalue] = useState("")

  const handleChange = (e:React.FormEvent<HTMLInputElement>) =>{
    setvalue(e.currentTarget.value)
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) =>{
    e.preventDefault()
    props.addFolder({name:value})
  }

  const handleClick = () =>{
    props.getFolder();
  }

  return (
    <div>
      <form action="" onSubmit={(e)=>handleSubmit(e)}>
        <input type="text" onChange={handleChange} value={value}/>
        <button type='submit'>add</button>
        <button onClick={handleClick}>Get Folders</button>
      </form>
    </div>
  );
}

const mapDispaychtoProps = (dispatch: Dispatch) => {
    return { 
      addFolder: (e: FolderDataType) => dispatch(addFolderRequest(e)),
      getFolder: () => dispatch(getFolderRequest())
      }
}
export default connect(null, mapDispaychtoProps)(Folder)
