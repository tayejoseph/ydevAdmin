import React from 'react'
import { NavLink } from 'react-router-dom'
import { AppRoute } from '../../../constants'
import { YdevIllustration } from '../../../components'
import {
  Home,
  Users,
  Settings,
  Loans,
  Repayments,
} from '../../../asset/convertedSvg'
import Container from './styles'

const DashSideNav = () => {
  return (
    <Container>
      <header>
        <YdevIllustration />
      </header>
      <nav>
        <NavLink className="menu" to={AppRoute.dashboard.initial} exact={true}>
          <Home />
          <span>Dashboard</span>
        </NavLink>
        <NavLink
          className={`menu`}
          to={`${AppRoute.dashboard.enterprise}?tab=corperateTraining`}
        >
          <Repayments />
          <span>Enterprise</span>
        </NavLink>
        <NavLink className={`menu`} to={AppRoute.dashboard.schools}>
          <Users />
          <span>Schools</span>
        </NavLink>
        <NavLink
          className="menu"
          to={`${AppRoute.dashboard.events}?tab=AllEvents`}
        >
          <Settings />
          <span>Events</span>
        </NavLink>
        <hr />
        <NavLink className="menu" to={AppRoute.dashboard.payments}>
          <Loans />
          <span>Payments</span>
        </NavLink>
      </nav>
    </Container>
  )
}

export default DashSideNav
