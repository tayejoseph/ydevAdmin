import React from 'react'
import { ydev } from '../../asset/png'
import { AppLogo } from '../../asset/convertedSvg'
import Container from './styles'

const Ydev = () => {
  return (
    <Container>
      <img src={ydev} alt="ydev" />
      <AppLogo />
    </Container>
  )
}

export default Ydev
