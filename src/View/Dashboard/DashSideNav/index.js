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

const reportSubMenu = [
  // { title: 'Initial Reports', link: AppRoute.dashboard.reports.initial },
  { title: 'Borrowers Reports', link: AppRoute.dashboard.reports.borrowers },
  { title: 'Loan Reports', link: AppRoute.dashboard.reports.loan },
  { title: 'Collection Reports', link: AppRoute.dashboard.reports.collection },
  { title: 'Settlement Reports', link: AppRoute.dashboard.reports.settlement },
]

const investorsSubMenu = [
  { title: 'View Investors', link: AppRoute.dashboard.investors.initial },
  { title: 'Email Investors', link: AppRoute.dashboard.investors.email },
  {
    title: 'SMS Investors',
    link: AppRoute.dashboard.investors.sms,
  },
]

const borrowersSubMenu = [
  { title: 'View Borrowers', link: AppRoute.dashboard.borrowers.initial },
  { title: 'Email Borrowers', link: AppRoute.dashboard.borrowers.email },
  {
    title: 'SMS Borrowers',
    link: AppRoute.dashboard.borrowers.sms,
  },
]

const usersSubMenu = [
  { title: 'View Users', link: AppRoute.dashboard.users.initial },
  { title: 'Email Users', link: AppRoute.dashboard.users.email },
  {
    title: 'SMS Users',
    link: AppRoute.dashboard.users.sms,
  },
]

const creditSubMenu = [
  { title: 'View All Credit', link: AppRoute.dashboard.credit.initial },
  { title: 'Due Credit', link: AppRoute.dashboard.credit.due },
  { title: 'Missed Payments', link: AppRoute.dashboard.credit.missed },
  {
    title: 'Principal Outstanding',
    link: AppRoute.dashboard.credit.outstanding,
  },
  { title: 'Credit Calculator', link: AppRoute.dashboard.credit.calculator },
  {
    title: 'SMS Users',
    link: AppRoute.dashboard.users.sms,
  },
]

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
          {usersSubMenu.map((item) => (
            <NavLink key={item.title} title={item.title} to={item.link} exact>
              {item.title}
            </NavLink>
          ))}
        </div>
        <NavLink
          className={`menu hasMenu`}
          to={AppRoute.dashboard.plans.initial}
        >
          <Users />
          <span>Plans</span>
          <IoIosArrowForward />
        </NavLink>
        <NavLink
          className="menu"
          onClick={(e) => {
            if (borrowersSubMenu.length > 0) {
              e.stopPropagation()
            }
          }}
          to={AppRoute.dashboard.borrowers.initial}
        >
          <Settings />
          <span>Borrowers</span>
          <IoIosArrowForward />
        </NavLink>
        <div
          className={`submenu ${
            doesRouteMatch('/borrowers', pathname) &&
            !doesRouteMatch('/reports', pathname)
              ? 'visible'
              : ''
          }`}
        >
          {borrowersSubMenu.map((item) => (
            <NavLink key={item.title} title={item.title} to={item.link} exact>
              {item.title}
            </NavLink>
          ))}
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
          {creditSubMenu.map((item) => (
            <NavLink key={item.title} title={item.title} to={item.link} exact>
              {item.title}
            </NavLink>
          ))}
        </div>
        <NavLink className="menu" to={AppRoute.dashboard.repayment.initial}>
          <Repayments />
          <span>Repayments</span>
          <IoIosArrowForward />
        </NavLink>
        <hr />
        <NavLink className="menu" to={AppRoute.dashboard.investors.initial}>
          <Investors />
          <span>Investors</span>
          <IoIosArrowForward />
        </NavLink>

        <div
          className={`submenu ${
            doesRouteMatch('/investors', pathname) ? 'visible' : ''
          }`}
        >
          {investorsSubMenu.map((item) => (
            <NavLink key={item.title} title={item.title} to={item.link} exact>
              {item.title}
            </NavLink>
          ))}
        </div>
        <NavLink className="menu" to={AppRoute.dashboard.reports.borrowers}>
          <Reports />
          <span>Reports</span>
          <IoIosArrowForward />
        </NavLink>
        <div
          className={`submenu ${
            doesRouteMatch('/reports', pathname) ? 'visible' : ''
          }`}
        >
          {reportSubMenu.map((item) => (
            <NavLink key={item.title} title={item.title} to={item.link} exact>
              {item.title}
            </NavLink>
          ))}
        </div>
        <NavLink
          className="menu"
          to={`${AppRoute.dashboard.settings.initial}?tab=general`}
        >
          <Settings />
          <span>Settings</span>
          <IoIosArrowForward />
        </NavLink>
      </nav>
    </Container>
  )
}

export default DashSideNav
