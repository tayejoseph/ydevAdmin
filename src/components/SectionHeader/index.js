import React from 'react'
import { NavLink } from 'react-router-dom'
import Container from './styles'

const SectionHeader = ({ links = [], title, leftSection }) => {
  return (
    <Container>
      <div className="col--1">
        <nav>
          {links.map((item, index) => (
            <React.Fragment key={item.title}>
              <NavLink to={item.link}>{item.title}</NavLink>
              {index !== links.length - 1 && <span> > </span>}
            </React.Fragment>
          ))}
        </nav>
        <h1>{title}</h1>
      </div>
      <div className="col--2">{leftSection}</div>
    </Container>
  )
}

export default SectionHeader
