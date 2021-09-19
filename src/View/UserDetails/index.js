import React, { useEffect } from 'react'
import { Tabs } from 'antd'
import { useSelector } from 'react-redux'
import { useQuery } from '../../hooks'
import { useHistory, useRouteMatch } from 'react-router-dom'
import { Button } from '../../UI'
import { AppRoute } from '../../constants'
import { SectionHeader } from '../../components'
import {
  getUserDetails,
  getUserTransactions,
  getUserCredits,
  getUserPayment,
} from '../../store/action'
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
  const { usersData } = useSelector((s) => s.adminData)
  const activeTab = useQuery().get('tab')
  const history = useHistory()
  const activeUser = usersData
    ? usersData.users.find((item) => Number(item.id) === Number(userId))
    : {}

  useEffect(() => {
    ;(async () => {
      const [
        userDetails,
        transactionDetails,
        creditDetails,
        paymentDetails,
      ] = await Promise.all([
        getUserDetails(userId),
        getUserTransactions(userId),
        getUserCredits(userId),
        getUserPayment(userId),
      ])

      console.log(
        {
          userDetails,
          transactionDetails,
          creditDetails,
          paymentDetails,
        },
        'sdjksdkdskj',
      )
    })()
  }, [userId])

  console.log({ activeUser }, 'sdjskdkdjsjk')
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
              <h2>
                {activeUser?.sname} {activeUser?.fname}
              </h2>
              <p>{activeUser?.email}</p>
              <p>{activeUser?.phone}</p>
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
              <Accounts {...{ activeUser }} />
            </TabPane>
            <TabPane tab="Transactions" key="transactions">
              <Transactions {...{ activeUser }} />
            </TabPane>
            <TabPane tab="Credit" key="credit">
              <Credit {...{ activeUser }} />
            </TabPane>
            <TabPane tab="Payment" key="payment">
              <Payment {...{ activeUser }} />
            </TabPane>
          </Tabs>
        </header>
      </div>
    </Container>
  )
}

export default UserDetails
