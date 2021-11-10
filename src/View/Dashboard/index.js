import React, { useRef, useState, useEffect } from 'react'
import { Route, Switch, useLocation } from 'react-router-dom'
import {
  DashHome,
  Payments,
  Alumini,
  Mentors,
  Events,
  Schools,
  GetInTouch,
  Jobs,
  HigherEd,
  CooperateTraining,
} from '../'
import { AppRoute, dashboardConstant } from '../../constants'
import TopNav from './TopNav'
import DashSideNav from './DashSideNav'
import Container from './styles'

const Dashboard = () => {
  const [showNav, setDisplay] = useState(false)
  const contentContainerRef = useRef(null)
  const { pathname } = useLocation()

  useEffect(() => {
    contentContainerRef.current.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth',
    })
  }, [pathname])

  return (
    <Container>
      <div
        className={`dash--side__nav ${showNav ? 'show--nav' : 'hide--nav'}`}
        onClick={() => setDisplay(false)}
      >
        <DashSideNav />
      </div>
      <main className="dashboard--main">
        <div className="dashboard--top__nav">
          <TopNav
            {...{ handleToggleMenu: () => setDisplay(!showNav), showNav }}
          />
        </div>
        <div
          className="dashboard--content"
          id={dashboardConstant.dashboardId}
          ref={contentContainerRef}
        >
          <Switch>
            <Route
              path={AppRoute.dashboard.initial}
              exact
              component={DashHome}
            />
            <Route
              path={AppRoute.dashboard.schools.initial}
              component={Schools}
            />
            <Route
              path={AppRoute.dashboard.events.initial}
              component={Events}
            />
            <Route path={AppRoute.dashboard.payments} component={Payments} />
            {/* <Route path={AppRoute.dashboard.enterpise} component={Enterprise} /> */}
            <Route path={AppRoute.dashboard.jobs.initial} component={Jobs} />
            <Route
              path={AppRoute.dashboard.mentors.initial}
              component={Mentors}
            />
            <Route
              path={AppRoute.dashboard.higherEd.initial}
              component={HigherEd}
            />
            <Route
              path={AppRoute.dashboard.alumini.initial}
              component={Alumini}
            />
            <Route
              path={AppRoute.dashboard.getInTouch.initial}
              component={GetInTouch}
            />
            <Route
              path={AppRoute.dashboard.cooperateTraining.initial}
              component={CooperateTraining}
            />
          </Switch>
        </div>
      </main>
    </Container>
  )
}

export default Dashboard
