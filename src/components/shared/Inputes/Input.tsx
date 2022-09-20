import {CustomInput} from './style'

interface PropsType{
  page:string;
  placeholder:string
  type:string
  onchange:(e:string)=>void
  onChange:()=>void
  value:string
}

const Input = (props:PropsType)=> {
  const handleChange = (e:React.FormEvent<HTMLInputElement>) =>{
    props.onchange(e.currentTarget.value)
  }
  return (
      <CustomInput page = {props.page} placeholder={props.placeholder} type={props.type} onChange={()=>props.onChange()} value={props.value} ></CustomInput>
  );
}

export default Input;
