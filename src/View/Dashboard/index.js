import React, { useRef, useEffect } from 'react'
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
} from '../'
import { AppRoute } from '../../constants'
import TopNav from './TopNav'
import DashSideNav from './DashSideNav'
import Container from './styles'

const Dashboard = () => {
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
      <div className="dash--side__nav">
        <DashSideNav />
      </div>
      <main className="dashboard--main">
        <div className="dashboard--top__nav">
          <TopNav />
        </div>
        <div className="dashboard--content" ref={contentContainerRef}>
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
          </Switch>
        </div>
      </main>
    </Container>
  )
}

export default Dashboard
