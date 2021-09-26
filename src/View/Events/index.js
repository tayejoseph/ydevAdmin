import React from 'react'
import { useHistory } from 'react-router-dom'
import { Tabs } from 'antd'
import { useQuery } from '../../hooks'
import { Button } from '../../UI'
import { SectionHeader } from '../../components'
import AltEvents from './AllEvents'
import AllEvents from './AllEvents'
import UpcomingEvents from './UpcomingEvents'
import PastEvents from './PastEvents'
import Container from './styles'

const { TabPane } = Tabs

const Events = () => {
  const modal = useQuery().get('modal')
  const activeTab = useQuery().get('tab')
  const history = useHistory()

  return (
    <>
      {modal && <AltEvents />}
      <Container>
        <SectionHeader
          title="Events"
          leftSection={
            <Button
              rounded
              onClick={() => {
                history.push(`?tab=${activeTab}&modal=add`)
              }}
            >
              Add Event
            </Button>
          }
        />

        <Tabs
          activeKey={activeTab}
          defaultActiveKey="AllEvents"
          onChange={(key) => history.push(`?tab=${key}`)}
        >
          <TabPane tab="All Events" key="AllEvents">
            <AllEvents />
          </TabPane>
          <TabPane tab="Upcoming Events" key="upcomingEvents">
            <UpcomingEvents />
          </TabPane>
          <TabPane tab="Past Events" key="pastEvents">
            <PastEvents />
          </TabPane>
        </Tabs>
      </Container>
    </>
  )
}

export default Events