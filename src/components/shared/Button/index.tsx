import React from 'react'
import { CustomButton } from './style'

interface PropsType{
  page:string,
  type:"submit"|"reset"|"button"
}
const Button = (props:PropsType)=>{

  return (
   <CustomButton type={props.type}>{props.page}</CustomButton>
  )
}

export default Button