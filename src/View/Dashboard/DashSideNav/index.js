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
        <NavLink className={`menu`} to={AppRoute.dashboard.schools.initial}>
          <Users />
          <span>Schools</span>
        </NavLink>
        <NavLink className="menu" to={AppRoute.dashboard.events.initial}>
          <Settings />
          <span>Events</span>
        </NavLink>
        <hr />
        <NavLink className="menu" to={AppRoute.dashboard.alumini.initial}>
          <Settings />
          <span>Hire Alumini</span>
        </NavLink>
        <NavLink className="menu" to={AppRoute.dashboard.higherEd.initial}>
          <Settings />
          <span>Higher Ed</span>
        </NavLink>
        <NavLink
          className="menu"
          to={AppRoute.dashboard.cooperateTraining.initial}
        >
          <Settings />
          <span>Cooperate Training</span>
        </NavLink>
        <hr />
        <NavLink className="menu" to={AppRoute.dashboard.jobs.initial}>
          <Settings />
          <span>Jobs</span>
        </NavLink>
        <NavLink className="menu" to={AppRoute.dashboard.applications.initial}>
          <Settings />
          <span>Applications</span>
        </NavLink>
        <NavLink className="menu" to={AppRoute.dashboard.mentors.initial}>
          <Settings />
          <span>Mentors</span>
        </NavLink>
        <NavLink className="menu" to={AppRoute.dashboard.getInTouch.initial}>
          <Settings />
          <span>Contacts</span>
        </NavLink>
        {/* <NavLink className="menu" to={AppRoute.dashboard.payments}>
          <Loans />
          <span>Payments</span>
        </NavLink> */}
      </nav>
    </Container>
  )
}

export default DashSideNav
