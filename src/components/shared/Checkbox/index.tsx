import { Checked } from './style'

interface PropsType{
  color: string;
}

const Check = (props:PropsType)=>{
  return (
    <Checked color='blue'>
    </Checked>
  )
}

export default Check