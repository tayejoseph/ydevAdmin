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
            doesRouteMatch('/borrowers', pathname) &&
            !doesRouteMatch('/reports', pathname)
              ? 'visible'
              : ''
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
