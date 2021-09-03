import React from 'react'
import { IoIosArrowDown } from 'react-icons/io'
import { MdNotificationsNone } from 'react-icons/md'
import { SearchInput, Button } from '../../../UI'
import Container from './styles'

const TopNav = () => {
  return (
    <Container>
      <div className="col--1">
        <SearchInput />
      </div>
      <div className="action--tray">
        <Button icon className="nofication--btn">
          <MdNotificationsNone />
        </Button>
        <button className="profile--btn">
          <span className="img--container" />
          Lagbaja Tamedu
          <IoIosArrowDown />
        </button>
      </div>
    </Container>
  )
}

export default TopNav
