import React from 'react'
import { Tabs } from 'antd'
import { useQuery } from '../../hooks'
import { useHistory, useRouteMatch } from 'react-router-dom'
import { Button } from '../../UI'
import { AppRoute } from '../../constants'
import { SectionHeader } from '../../components'
import Credit from './Credit'
import Accounts from './Accounts'
import Payment from './Payment'
import Transactions from './Transactions'
import Container from './styles'

const { TabPane } = Tabs

const UserDetails = () => {
  const {
    params: { userId },
  } = useRouteMatch()
  const activeTab = useQuery().get('tab')
  const history = useHistory()
  return (
    <Container>
      <SectionHeader
        title="Single User"
        links={[
          { title: 'Users', link: AppRoute.dashboard.users.initial },
          {
            title: 'Single Users',
            link: `${AppRoute.dashboard.users.initial}/${userId}?tab=accounts`,
          },
        ]}
      />

      <div className="component--header">
        <header className="pallet--header">
          <div className="row--item">
            <div className="profile--img" />
            <div className="profile--details">
              <h2>John Doe</h2>
              <p>johndoe@gmail.com</p>
              <p>08032805684</p>
            </div>
            <div className="action--container">
              <Button
                onClick={() =>
                  history.push(`${AppRoute.dashboard.users.sms}/${userId}`)
                }
              >
                Send SMS
              </Button>
              <Button
                outlined
                onClick={() =>
                  history.push(`${AppRoute.dashboard.users.email}/${userId}`)
                }
              >
                Send Email
              </Button>
            </div>
          </div>

          <Tabs
            activeKey={activeTab}
            defaultActiveKey="accounts"
            onChange={(key) => history.push(`?tab=${key}`)}
          >
            <TabPane tab="Accounts" key="accounts">
              <Accounts />
            </TabPane>
            <TabPane tab="Transactions" key="transactions">
              <Transactions />
            </TabPane>
            <TabPane tab="Credit" key="credit">
              <Credit />
            </TabPane>
            <TabPane tab="Payment" key="payment">
              <Payment />
            </TabPane>
          </Tabs>
        </header>
      </div>
    </Container>
  )
}

export default UserDetails
