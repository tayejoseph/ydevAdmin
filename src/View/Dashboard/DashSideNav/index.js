import React from 'react'
import { NavLink } from 'react-router-dom'
import { AiOutlineContacts } from 'react-icons/ai'
import { MdBusiness } from 'react-icons/md'
import { RiCalendarEventLine } from 'react-icons/ri'
import { IoMdContacts } from 'react-icons/io'
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
          <MdBusiness />
          <span>Schools</span>
        </NavLink>
        <NavLink className="menu" to={AppRoute.dashboard.events.initial}>
          <RiCalendarEventLine />
          <span>Events</span>
        </NavLink>
        <hr />
        <NavLink className="menu" to={AppRoute.dashboard.alumini.initial}>
          <IoMdContacts />
          <span>Hire Alumini</span>
        </NavLink>
        <NavLink className="menu" to={AppRoute.dashboard.higherEd.initial}>
          <Settings />
          <span>Higher Ed</span>
        </NavLink>
        <NavLink className="menu" to={AppRoute.dashboard.instructor.initial}>
          <Settings />
          <span>Instructors</span>
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
          <AiOutlineContacts />
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
