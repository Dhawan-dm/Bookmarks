import { FiAlertTriangle } from 'react-icons/fi'

import { AlertContainer, TextContainer } from './style'

function Alert() {
  return (
    <AlertContainer>
      <FiAlertTriangle size={"8%"}></FiAlertTriangle>
      <TextContainer>
          Alert !, an error occured
      </TextContainer>
    </AlertContainer>
  )
}

export default Alert