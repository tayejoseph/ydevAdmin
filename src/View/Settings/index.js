import React from 'react'
import { Switch, Route, useHistory } from 'react-router-dom'
import { Tabs } from 'antd'
import { useQuery } from '../../hooks'
import { AppRoute } from '../../constants'
import { SectionHeader } from '../../components'
import { RepaymentBulk } from '../'
import General from './General'
import Account from './Account'
import Users from './Users'
import Api from './Api'
import WebHook from './WebHook'
import AccSettings from './AccSettings'
import Container from './styles'

const { TabPane } = Tabs

const Settings = () => {
  const activeTab = useQuery().get('tab')
  const history = useHistory()
  return (
    <Switch>
      <Route
        path={`${AppRoute.dashboard.repayment.bulk}`}
        component={RepaymentBulk}
      />
      <Route path={AppRoute.dashboard.settings.inital} exact>
        <Container>
          <SectionHeader
            title="Settings"
            links={[
              {
                title: 'Users',
                link: AppRoute.dashboard.repayment.initial,
              },
              {
                title: 'Users',
                link: AppRoute.dashboard.repayment.initial,
              },
            ]}
          />

          <Tabs
            activeKey={activeTab}
            defaultActiveKey="accounts"
            onChange={(key) => history.push(`?tab=${key}`)}
          >
            <TabPane tab="General" key="general">
              <General />
            </TabPane>
            <TabPane tab="Bank accounts" key="bankAccount">
              <Account />
            </TabPane>
            <TabPane tab="Users" key="users">
              <Users />
            </TabPane>
            <TabPane tab="API" key="api">
              <Api />
            </TabPane>
            <TabPane tab="Webhooks" key="webhooks">
              <WebHook />
            </TabPane>
            <TabPane tab="Account Settings" key="accountSettings">
              <AccSettings />
            </TabPane>
          </Tabs>
        </Container>
      </Route>
    </Switch>
  )
}

export default Settings
