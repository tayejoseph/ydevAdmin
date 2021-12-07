import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { IoIosArrowDown, IoMdLogOut } from 'react-icons/io'
import { HiMenuAlt2 } from 'react-icons/hi'
import { logOutHander } from '../../../store/action'
// import { FiBell } from 'react-icons/fi'
import { Button } from '../../../UI'
import Container from './styles'

const TopNav = ({ handleToggleMenu, showNav }) => {
  const [showPopup, setDisplay] = useState(false)
  const dispatch = useDispatch()

  return (
    <Container>
      <div className="col--1">
        <Button
          icon
          className="toggle--btn"
          onClick={handleToggleMenu}
          arial-label={showNav ? 'hide menu' : 'show menu'}
        >
          <HiMenuAlt2 />
        </Button>
      </div>
      <div className="action--tray">
        <button
          className={`profile--btn ${showPopup ? 'show--popup' : ''}`}
          onClick={() => setDisplay(!showPopup)}
        >
          <span className="img--container" />
          Ydev Admin
          <IoIosArrowDown />
        </button>
        {showPopup && (
          <div className="popup--container">
            <nav>
              <ol>
                <li
                  role="button"
                  onClick={() => {
                    dispatch(logOutHander())
                  }}
                >
                  <IoMdLogOut />
                  Sign Out
                </li>
              </ol>
            </nav>
          </div>
        )}
      </div>
    </Container>
  )
}

export default TopNav
