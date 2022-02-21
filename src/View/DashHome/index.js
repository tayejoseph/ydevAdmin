import React from 'react'
import { useSelector } from 'react-redux'
import { DatePicker, Space } from 'antd'
import { useTheme } from 'styled-components'
import {
  CartesianGrid,
  XAxis,
  YAxis,
  AreaChart,
  Area,
  ResponsiveContainer,
} from 'recharts'
import { toMoney } from '../../helpers'
import { InputGroup } from '../../UI'
import { HiOutlineMenuAlt3 } from 'react-icons/hi'
import { AppRoute } from '../../constants'
import { SectionHeader, PalletItem, DashPallet } from '../../components'
import Container from './styles'

const monthlyEarnings = [...Array(30).keys()].map((item, index) => ({
  day: `oct${index}`,
  amount: Math.floor(Math.random() * 500),
}))

const earnings = [
  { month: 'jan', amount: Math.floor(Math.random() * 500) },
  { month: 'feb', amount: Math.floor(Math.random() * 500) },
  { month: 'march', amount: Math.floor(Math.random() * 500) },
  { month: 'april', amount: Math.floor(Math.random() * 500) },
  { month: 'may', amount: Math.floor(Math.random() * 500) },
  { month: 'june', amount: Math.floor(Math.random() * 500) },
  { month: 'july', amount: Math.floor(Math.random() * 500) },
]

const DashHome = () => {
  const { dashboardData } = useSelector((state) => state.AppReducer)
  const theme = useTheme()

  const onChange = (date, dateString) => {
    console.log(date, dateString)
  }

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
        <PalletItem
          title="Monthly Earnings"
          rightContent={
            <div className="graph-header">
              <DatePicker onChange={onChange} picker="month" />
            </div>
          }
        >
          <ResponsiveContainer width={'100%'} height="100%">
            <AreaChart
              data={monthlyEarnings}
              margin={{ top: 20, right: 30, left: -20, bottom: 0 }}
            >
              <XAxis dataKey="day" angle={'0'} />
              <YAxis />
              <CartesianGrid strokeDasharray="3 3" />
              <Area
                type="monotone"
                dataKey="amount"
                stroke="#109CF1"
                strokeWidth={5}
                fillOpacity={1}
                fill="url(#colorPv)"
              />
            </AreaChart>
          </ResponsiveContainer>
        </PalletItem>
        <PalletItem
          title="Yearly Earnings"
          rightContent={
            <div className="graph-header">
              <DatePicker onChange={onChange} picker="year" />
            </div>
          }
        >
          <ResponsiveContainer width={'100%'} height="100%">
            <AreaChart
              data={earnings}
              margin={{ top: 20, right: 30, left: -20, bottom: 0 }}
            >
              <XAxis dataKey="month" />
              <YAxis />
              <CartesianGrid strokeDasharray="3 3" />
              <Area
                type="monotone"
                dataKey="amount"
                stroke="#109CF1"
                strokeWidth={5}
                fillOpacity={1}
                fill="url(#colorPv)"
              />
            </AreaChart>
          </ResponsiveContainer>
        </PalletItem>
      </div>
    </Container>
  )
}

export default DashHome
