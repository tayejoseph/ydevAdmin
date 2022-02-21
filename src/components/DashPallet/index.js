import React from 'react'
import Container from './styles'

const DashPallet = ({ title, icon, value, Icon }) => {
  return (
    <Container>
      <div>
        <p>{title}</p>
        {Icon}
      </div>
      <h1>{value}</h1>
    </Container>
  )
}

export default DashPallet
