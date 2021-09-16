import React from 'react'
import { useTheme } from 'styled-components'
import { HiOutlineMenuAlt3 } from 'react-icons/hi'
import { AppRoute } from '../../constants'
import {
  SectionHeader,
  PalletItem,
  LineGraph,
  BarChart,
  LineBars,
  DashPallet,
  PieChart,
} from '../../components'
import Container from './styles'

const DashHome = () => {
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
            title={'TOTAL BORROWERS'}
            icon={<HiOutlineMenuAlt3 />}
            value={'5.5k'}
            bgColor={'#28C76F'}
          />
          <DashPallet
            title={'TOTAL USERS'}
            bgColor={theme.primary}
            value={'5.5k'}
          />
          <DashPallet
            title={'TOTAL CREDIT DISBURSED'}
            bgColor={'#021F4F'}
            value={'NGN 80,000'}
          />
        </div>
      </header>
      <div className="page--content">
        <PalletItem title="Total Principal Outstanding Open Loans - Monthly">
          <LineGraph />
        </PalletItem>
        <PalletItem title="Total Interest Outstanding Open Loans - Monthly">
          <LineGraph />
        </PalletItem>
        <PalletItem title="Total Fees Outstanding Open Loans - Monthly">
          <LineGraph />
        </PalletItem>
        <PalletItem title="Total Penalty Outstanding Open Loans - Monthly">
          <LineGraph />
        </PalletItem>
        <PalletItem title="Total Fees Outstanding Open Loans - Monthly">
          <BarChart />
        </PalletItem>
        <PalletItem title="Total Penalty Outstanding Open Loans - Monthly">
          <BarChart
            {...{
              fillOne: '#1461DE',
              fillTwo: '#00C253',
            }}
          />
        </PalletItem>
        <PalletItem
          className="full--span"
          title="Number of Open Loans(Cumulative) - Monthly"
        >
          <LineGraph />
        </PalletItem>
        <PalletItem title="Rate of Return % (All Time)">
          <LineBars
            data={[
              {
                title: 'All Loans',
                percentage: '80',
              },
              {
                title: 'Open Loans',
                percentage: '50',
              },
              {
                title: 'Fully Paid Loans',
                percentage: '70',
              },
              {
                title: 'Default Loans',
                percentage: '40',
              },
            ]}
          />
        </PalletItem>
        <PalletItem title="Active Male / Female Borrowers % (All Time)">
          <PieChart />
        </PalletItem>
        <PalletItem className="full--span" title="Loans Released - Monthly">
          <LineGraph />
        </PalletItem>
        <PalletItem
          className="full--span"
          title="Loan Collections vs Due Loans - Monthly"
        >
          <LineGraph />
        </PalletItem>
        <PalletItem title="Fees - Due vs Collections - Monthly">
          <BarChart />
        </PalletItem>
        <PalletItem title="Penalty - Due vs Collections - Monthly">
          <BarChart />
        </PalletItem>
      </div>
    </Container>
  )
}

export default DashHome
