import React, { useRef, useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { Route, Switch, useLocation } from 'react-router-dom'
import { DashHome, Payments, Enterprise, Events, Schools } from '../'
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
            <Route path={AppRoute.dashboard.schools} component={Schools} />
            <Route path={AppRoute.dashboard.events} component={Events} />
            <Route path={AppRoute.dashboard.payments} component={Payments} />
            <Route path={AppRoute.dashboard.enterpise} component={Enterprise} />
          </Switch>
        </div>
      </main>
    </Container>
  )
}

export default Dashboard
