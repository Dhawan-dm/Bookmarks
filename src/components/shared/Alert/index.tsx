import React from 'react'
import { AlertContainer, TextContainer } from './style'
import { FiAlertTriangle } from 'react-icons/fi'

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