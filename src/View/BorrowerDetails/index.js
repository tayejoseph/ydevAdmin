import React from 'react'
import { Tabs } from 'antd'
import { useQuery } from '../../hooks'
import { useHistory, useRouteMatch } from 'react-router-dom'
import { Button } from '../../UI'
import { AppRoute } from '../../constants'
import { SectionHeader } from '../../components'
import Credit from './Credit'
import Container from './styles'

const { TabPane } = Tabs

const BorrowerDetails = () => {
  const {
    params: { userId },
  } = useRouteMatch()
  const activeTab = useQuery().get('tab')
  const history = useHistory()
  return (
    <Container>
      <SectionHeader
        title="Single Borrower"
        links={[
          { title: 'Borrowers', link: AppRoute.dashboard.borrowers.initial },
          {
            title: 'Single Borrower',
            link: `${AppRoute.dashboard.borrowers.initial}/${userId}?tab=creditDetails`,
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
                  history.push(`${AppRoute.dashboard.borrowers.sms}/${userId}`)
                }
              >
                Send SMS
              </Button>
              <Button
                outlined
                onClick={() =>
                  history.push(
                    `${AppRoute.dashboard.borrowers.email}/${userId}`,
                  )
                }
              >
                Send Email
              </Button>
            </div>
          </div>

          <Tabs
            activeKey={activeTab}
            defaultActiveKey="creditDetails"
            onChange={(key) => history.push(`?tab=${key}`)}
          >
            <TabPane tab="Credit Details" key="creditDetails">
              <Credit />
            </TabPane>
          </Tabs>
        </header>
      </div>
    </Container>
  )
}

export default BorrowerDetails
