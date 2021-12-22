import React from 'react'
import { NavLink } from 'react-router-dom'
import { AiOutlineContacts } from 'react-icons/ai'
import { MdBusiness } from 'react-icons/md'
import { FaChalkboardTeacher, FaUserGraduate } from 'react-icons/fa'
import { GiTeacher } from 'react-icons/gi'
import { BiConversation } from 'react-icons/bi'
import { GoBriefcase } from 'react-icons/go'
import { RiCalendarEventLine, RiMailAddFill, RiGuideLine } from 'react-icons/ri'
import { IoMdContacts } from 'react-icons/io'
import { AppRoute } from '../../../constants'
import { YdevIllustration } from '../../../components'
import { Home } from '../../../asset/convertedSvg'
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
          <FaUserGraduate />
          <span>Higher Ed</span>
        </NavLink>
        <NavLink className="menu" to={AppRoute.dashboard.instructor.initial}>
          <GiTeacher />
          <span>Instructors</span>
        </NavLink>
        <NavLink
          className="menu"
          to={AppRoute.dashboard.cooperateTraining.initial}
        >
          <FaChalkboardTeacher />
          <span>Corporate Training</span>
        </NavLink>
        <hr />
        <NavLink className="menu" to={AppRoute.dashboard.consultation.initial}>
          <BiConversation />
          <span>Consultation</span>
        </NavLink>
        <NavLink className="menu" to={AppRoute.dashboard.jobs.initial}>
          <GoBriefcase />
          <span>Jobs</span>
        </NavLink>
        <NavLink className="menu" to={AppRoute.dashboard.applications.initial}>
          <RiMailAddFill />
          <span>Applications</span>
        </NavLink>
        <NavLink className="menu" to={AppRoute.dashboard.mentors.initial}>
          <RiGuideLine />
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
