import React, { useRef, useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { Route, Switch, useLocation } from 'react-router-dom'
import {
  DashHome,
  Users,
  Borrowers,
  Settings,
  Credit,
  Repayment,
  Investors,
  Reports,
  Plans,
} from '../'
import { AppRoute, dashboardConstant } from '../../constants'
import { getRoles } from '../../store/action'
import TopNav from './TopNav'
import DashSideNav from './DashSideNav'
import Container from './styles'

const Dashboard = () => {
  const [showNav, setDisplay] = useState(false)
  const dispatch = useDispatch()
  const contentContainerRef = useRef(null)
  const { pathname } = useLocation()

  useEffect(() => {
    dispatch(getRoles())
  }, [dispatch])

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
            <Route path={AppRoute.dashboard.users.initial} component={Users} />
            <Route
              path={AppRoute.dashboard.borrowers.initial}
              component={Borrowers}
            />
            <Route
              path={AppRoute.dashboard.credit.initial}
              component={Credit}
            />
            <Route
              path={AppRoute.dashboard.repayment.initial}
              component={Repayment}
            />
            <Route
              path={AppRoute.dashboard.reports.initial}
              component={Reports}
            />
            <Route
              path={AppRoute.dashboard.investors.initial}
              component={Investors}
            />
            <Route
              path={AppRoute.dashboard.settings.initial}
              component={Settings}
            />
            <Route path={AppRoute.dashboard.plans.initial} component={Plans} />
          </Switch>
        </div>
      </main>
    </Container>
  )
}

export default Dashboard
