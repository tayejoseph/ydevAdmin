import React from 'react'
import Container from './styles'

const PalletItem = ({ children, title, className }) => {
  return (
    <Container className={`pallet--item ${className}`}>
      <h1>{title}</h1>
      <div className="content--container">{children}</div>
    </Container>
  )
}

export default PalletItem
