import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { IoIosArrowDown, IoMdLogOut } from 'react-icons/io'
import { HiMenuAlt2 } from 'react-icons/hi'
import { logOutHander } from '../../../store/action'
import { FiBell } from 'react-icons/fi'
import { SearchInput, Button } from '../../../UI'
import Container from './styles'

const TopNav = ({ handleToggleMenu, showNav }) => {
  const [showPopup, setDisplay] = useState(false)
  const dispatch = useDispatch()
  const { userDetails } = useSelector((state) => state.userData)
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
        <SearchInput />
      </div>
      <div className="action--tray">
        <Button icon className="nofication--btn">
          <FiBell />
        </Button>
        <button
          className={`profile--btn ${showPopup ? 'show--popup' : ''}`}
          onClick={() => setDisplay(!showPopup)}
        >
          <span className="img--container" />
          {userDetails?.sname} {userDetails?.fname}
          <IoIosArrowDown />
        </button>
        {showPopup && (
          <div className="popup--container">
            <nav>
              <ol>
                {/* <li
                role="button"
                onClick={() =>
                  history.push('/dashboard/settings/companyProfile')
                }
              >
                <IoIosContact />
                Settings
              </li> */}
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
