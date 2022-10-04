import loading from "../../../../asset/spinner/loading.gif"
import { SpinnerContainer } from "./style"

interface PropsType{
  component:string;
}

const Spinner = (props:PropsType)=> {
  return (
    <SpinnerContainer component={props.component}>
      <img src={loading} alt="loading" />
    </SpinnerContainer>
  )
}

export default Spinner