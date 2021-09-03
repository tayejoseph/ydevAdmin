import React from 'react'
import { Route, Switch } from 'react-router-dom'
import { DashHome, Users, Borrowers } from '../'
import { AppRoute } from '../../constants'
import TopNav from './TopNav'
import DashSideNav from './DashSideNav'
import Container from './styles'

const Dashboard = () => {
  return (
    <Container>
      <div className="dash--side__nav">
        <DashSideNav />
      </div>
      <main className="dashboard--main">
        <div className="dashboard--top__nav">
          <TopNav />
        </div>
        <div className="dashboard--content">
          <Switch>
            <Route
              path={AppRoute.dashboard.initial}
              exact
              component={DashHome}
            />
            <Route path={AppRoute.dashboard.users} component={Users} />
            <Route path={AppRoute.dashboard.borrowers} component={Borrowers} />
          </Switch>
        </div>
      </main>
    </Container>
  )
}

export default Dashboard
