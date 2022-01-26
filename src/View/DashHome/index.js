import React from 'react'
import { useSelector } from 'react-redux'
import { useTheme } from 'styled-components'
import { toMoney } from '../../helpers'
import { HiOutlineMenuAlt3 } from 'react-icons/hi'
import { AppRoute } from '../../constants'
import {
  SectionHeader,
  PalletItem,
  LineGraph,
  DashPallet,
} from '../../components'
import Container from './styles'

const DashHome = () => {
  const { dashboardData } = useSelector((state) => state.AppReducer)
  const theme = useTheme()
  return (
    <Container>
      <header className="page--header">
        <SectionHeader
          title="Dashboard"
          links={[
            {
              title: 'Dashboard',
              link: AppRoute.dashboard.initial,
            },
          ]}
        />
        <div className="grid--container">
          <DashPallet
            title={'Total Earnings'}
            icon={<HiOutlineMenuAlt3 />}
            value={toMoney(dashboardData?.total_earnings || 0, true)}
            bgColor={'#28C76F'}
          />
          <DashPallet
            title={'TOTAL FOLLOWUP'}
            bgColor={'#021F4F'}
            value={toMoney(dashboardData?.follow_ups || 0, true)}
          />
          <DashPallet
            title={'Total Response'}
            bgColor={theme.primary}
            value={toMoney(dashboardData?.total_response || 0, true)}
          />
        </div>
      </header>
      <div className="page--content">
        <PalletItem title="Earnings">
          <LineGraph />
        </PalletItem>
      </div>
    </Container>
  )
}

export default DashHome
