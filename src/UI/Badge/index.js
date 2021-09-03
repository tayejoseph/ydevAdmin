import React from 'react'
import Container from './style'

const Badge = ({ children }) => {
  return (
    <Container className="badge">
      <div>{children}</div>
    </Container>
  )
}
export default Badge
