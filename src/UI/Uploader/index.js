import React from 'react'
import { Uploader } from '../../asset/convertedSvg'
import Container from './styles'

const UploaderInput = ({ label }) => {
  return (
    <Container>
      <label>
        <input type="file" />
        <Uploader />
        <span>
          Drop your file here or <span className="inner--span">Browse</span>
        </span>
      </label>
    </Container>
  )
}

export default UploaderInput
