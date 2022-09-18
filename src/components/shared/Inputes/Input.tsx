import {CustomInput} from './style'

interface PropsType{
  page:string;
  placeholder:string
  type:string
}

const Input = (props:PropsType)=> {
  return (
      <CustomInput page = {props.page} placeholder={props.placeholder} type={props.type}></CustomInput>
  );
}

export default Input;
