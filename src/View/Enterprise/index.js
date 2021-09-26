import React from 'react'
import { Switch, Route, useHistory } from 'react-router-dom'
import { Tabs } from 'antd'
import { useQuery } from '../../hooks'
import { AppRoute } from '../../constants'
import { SectionHeader } from '../../components'
import HireAlumni from './HireAlumni'
import CorperateTraining from './CorperateTraining'
import Partenerships from './Partenerships'
import Container from './styles'

const { TabPane } = Tabs

const Enterprise = () => {
  const activeTab = useQuery().get('tab')
  const history = useHistory()
  return (
    <Switch>
      <Route path={AppRoute.dashboard.settings.inital} exact>
        <Container>
          <SectionHeader title="Enterprise Response" links={[]} />

          <Tabs
            activeKey={activeTab}
            defaultActiveKey="accounts"
            onChange={(key) => history.push(`?tab=${key}`)}
          >
            <TabPane tab="Corperate Training" key="corperateTraining">
              <CorperateTraining />
            </TabPane>
            <TabPane tab="Hire Alumni" key="hireAlumni">
              <HireAlumni />
            </TabPane>
            <TabPane tab="Partenerships" key="partenerships">
              <Partenerships />
            </TabPane>
          </Tabs>
        </Container>
      </Route>
    </Switch>
  )
}

export default Enterprise
