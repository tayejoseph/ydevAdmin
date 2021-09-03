import React from 'react'
import { NavLink } from 'react-router-dom'
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
  return (
    <Container>
      <header>
        <AppLogo />
      </header>
      <nav>
        <NavLink to={AppRoute.dashboard.initial} exact={true}>
          <Home />
          <span>Dashboard</span>
          <IoIosArrowForward />
        </NavLink>
        <NavLink to={AppRoute.dashboard.users}>
          <Users />
          <span>Users</span>
          <IoIosArrowForward />
        </NavLink>
        <NavLink to={AppRoute.dashboard.borrowers}>
          <Settings />
          <span>Borrowers</span>
          <IoIosArrowForward />
        </NavLink>
        <hr />
        <NavLink to={AppRoute.dashboard.loans}>
          <Loans />
          <span>Loans</span>
          <IoIosArrowForward />
        </NavLink>
        <NavLink to={AppRoute.dashboard.repayments}>
          <Repayments />
          <span>Repayments</span>
          <IoIosArrowForward />
        </NavLink>
        <hr />
        <NavLink to={AppRoute.dashboard.investors}>
          <Investors />
          <span>Investors</span>
          <IoIosArrowForward />
        </NavLink>
        <NavLink to={AppRoute.dashboard.reports}>
          <Reports />
          <span>Reports</span>
          <IoIosArrowForward />
        </NavLink>
        <NavLink to={AppRoute.dashboard.settings}>
          <Settings />
          <span>Settings</span>
          <IoIosArrowForward />
        </NavLink>
      </nav>
    </Container>
  )
}

export default DashSideNav
