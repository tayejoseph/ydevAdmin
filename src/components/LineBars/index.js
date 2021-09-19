import React from 'react'
import Container, { ItemContainer } from './styles'

const BarItem = (props) => <ItemContainer className="bar" {...props} />

const LineBars = ({ data = [], color = '#7367F0' }) => {
  return (
    <Container>
      {data.map((item) => (
        <div className="bar--item" key={item.title}>
          <div className="top--container">
            <h3>{item.title}</h3>
            <p>{item.percentage}/100%</p>
          </div>
          <BarItem percentage={`${item.percentage}%`} color={color} />
        </div>
      ))}
    </Container>
  )
}

export default LineBars
