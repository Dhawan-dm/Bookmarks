import loading from "../../../asset/spinner/loading.gif"
import { SpinnerContainer } from "./style"
function Spinner() {
  return (
    <SpinnerContainer>
      <img src={loading} alt="loading" />
    </SpinnerContainer>
  )
}

export default Spinner