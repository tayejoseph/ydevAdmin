import React from 'react'
import Container from './styles'

const PalletItem = ({ children, rightContent, title, className }) => {
  return (
    <Container className={`pallet--item ${className}`}>
      <header className="palletItem-header">
        <div>
          <h1>{title}</h1>
        </div>
        <div>{rightContent && rightContent}</div>
      </header>
      <div className="content--container">{children}</div>
    </Container>
  )
}

export default PalletItem
