import loading from "../../../../asset/spinner/loading-2.gif"
import { SpinnerContainer } from "./style"

interface PropsType{
  component:string;
}

const Spinner2 = (props:PropsType)=> {
  return (
    <SpinnerContainer>
      <img src={loading} alt="loading" />
    </SpinnerContainer>
  )
}

export default Spinner2