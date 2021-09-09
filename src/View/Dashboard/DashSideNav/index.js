import React from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import { doesRouteMatch } from '../../../helpers'
import { AppRoute } from '../../../constants'
import {
  Home,
  Users,
  Settings,
  Loans,
  Repayments,
  Investors,
  Reports,
  AppLogo,
} from '../../../asset/convertedSvg'
import { IoIosArrowForward } from 'react-icons/io'
import Container from './styles'

const DashSideNav = () => {
  const { pathname } = useLocation()
  console.log(doesRouteMatch(pathname, '/users'), 'sdkjsdskj')
  return (
    <Container>
      <header>
        <AppLogo />
      </header>
      <nav>
        <NavLink className="menu" to={AppRoute.dashboard.initial} exact={true}>
          <Home />
          <span>Dashboard</span>
          <IoIosArrowForward />
        </NavLink>
        <NavLink
          className={`menu hasMenu`}
          to={AppRoute.dashboard.users.initial}
        >
          <Users />
          <span>Users</span>
          <IoIosArrowForward />
        </NavLink>
        <div
          className={`submenu ${
            doesRouteMatch('/users', pathname) ? 'visible' : ''
          }`}
        >
          <NavLink
            title={'View Users'}
            to={AppRoute.dashboard.users.view}
            exact
          >
            View Users
          </NavLink>
          <NavLink title={'Email Users'} to={AppRoute.dashboard.users.email}>
            Email Users
          </NavLink>
          <NavLink title={'SMS Users'} to={AppRoute.dashboard.users.sms}>
            SMS Users
          </NavLink>
        </div>
        <NavLink className="menu" to={AppRoute.dashboard.borrowers.initial}>
          <Settings />
          <span>Borrowers</span>
          <IoIosArrowForward />
        </NavLink>
        <div
          className={`submenu ${
            doesRouteMatch('/borrowers', pathname) ? 'visible' : ''
          }`}
        >
          <NavLink
            title={'View Borrowers'}
            to={AppRoute.dashboard.borrowers.initial}
            exact
          >
            View Borrowers
          </NavLink>
          <NavLink
            title={'Email Borrowers'}
            to={AppRoute.dashboard.borrowers.email}
          >
            Email Borrowers
          </NavLink>
          <NavLink
            title={'SMS Borrowers'}
            to={AppRoute.dashboard.borrowers.sms}
          >
            SMS Borrowers
          </NavLink>
        </div>
        <hr />
        <NavLink className="menu" to={AppRoute.dashboard.credit.initial}>
          <Loans />
          <span>Credit</span>
          <IoIosArrowForward />
        </NavLink>
        <div
          className={`submenu ${
            doesRouteMatch('/credit', pathname) ? 'visible' : ''
          }`}
        >
          <NavLink
            title={'View Borrowers'}
            to={AppRoute.dashboard.credit.initial}
            exact
          >
            View All Credit
          </NavLink>
          <NavLink title={'Email Borrowers'} to={AppRoute.dashboard.credit.due}>
            Due Credit
          </NavLink>
          <NavLink
            title={'SMS Borrowers'}
            to={AppRoute.dashboard.credit.missed}
          >
            Missed Payments
          </NavLink>
          <NavLink
            title={'SMS Borrowers'}
            to={AppRoute.dashboard.credit.outstanding}
          >
            Principal Outstanding
          </NavLink>
          <NavLink
            title={'SMS Borrowers'}
            to={AppRoute.dashboard.credit.calculator}
          >
            Credit Calculator
          </NavLink>
        </div>
        <NavLink className="menu" to={AppRoute.dashboard.repayment.initial}>
          <Repayments />
          <span>Repayments</span>
          <IoIosArrowForward />
        </NavLink>
        <hr />
        <NavLink className="menu" to={AppRoute.dashboard.investors}>
          <Investors />
          <span>Investors</span>
          <IoIosArrowForward />
        </NavLink>
        <NavLink className="menu" to={AppRoute.dashboard.reports}>
          <Reports />
          <span>Reports</span>
          <IoIosArrowForward />
        </NavLink>
        <NavLink className="menu" to={AppRoute.dashboard.settings}>
          <Settings />
          <span>Settings</span>
          <IoIosArrowForward />
        </NavLink>
      </nav>
    </Container>
  )
}

export default DashSideNav
