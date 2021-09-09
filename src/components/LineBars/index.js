import React from 'react'
import Container from './styles'

const LineBars = ({ data = [], color = '#7367F0' }) => {
  return (
    <Container>
      {data.map((item) => (
        <div className="bar--item">
          <div className="top--container">
            <h3>{item.title}</h3>
            <p>{item.percentage}/100%</p>
          </div>
          <div
            className="bar"
            data-color={color}
            data-percentage={`${item.percentage}%`}
          />
        </div>
      ))}
    </Container>
  )
}

export default LineBars
