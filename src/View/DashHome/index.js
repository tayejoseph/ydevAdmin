import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { DatePicker } from 'antd'
import abbreviate from 'number-abbreviate'
import { CSVLink } from 'react-csv'
import { useTheme } from 'styled-components'
import {
  CartesianGrid,
  XAxis,
  YAxis,
  AreaChart,
  Area,
  ResponsiveContainer,
} from 'recharts'
import { Spinner, Button } from '../../UI'
import { Calendar } from '../../asset/convertedSvg'
import { getDashboardGraph } from '../../store/action'
import { HiOutlineMenuAlt3 } from 'react-icons/hi'
import { AppRoute } from '../../constants'
import { SectionHeader, PalletItem, DashPallet } from '../../components'
import Container from './styles'

const DashHome = () => {
  const initLoading = {
    month: false,
    year: false,
  }
  const [loading, setLoading] = useState(initLoading)
  const [{ month, year }, setGraph] = useState({
    month: [],
    year: [],
  })
  const { dashboardData } = useSelector((state) => state.AppReducer)
  const theme = useTheme()

  const handleGetMonthData = (month) => {
    setLoading((s) => ({
      ...s,
      month: true,
    }))

    getDashboardGraph({ month })
      .then((response) => {
        const { data } = response
        setGraph((s) => ({
          ...s,
          month: data.month,
        }))
      })
      .finally(() => {
        setLoading((s) => ({
          ...s,
          month: false,
        }))
      })
  }

  const handleGetYearData = (year) => {
    setLoading((s) => ({
      ...s,
      year: true,
    }))

    getDashboardGraph({ year })
      .then((response) => {
        const { data } = response
        setGraph((s) => ({
          ...s,
          year: data.year,
        }))
      })
      .finally(() => {
        setLoading((s) => ({
          ...s,
          year: false,
        }))
      })
  }

  const renderEmptyDisplay = () => (
    <div className="empty-container">
      <Calendar />
      <p>You don't have any transaction data for the date range selected</p>
    </div>
  )

  useEffect(() => {
    const currentTime = new Date()
    const month = currentTime.getMonth() + 1
    // returns the year (four digits)
    const year = currentTime.getFullYear()
    handleGetYearData(year)
    handleGetMonthData(`${month}-${year}`)
  }, [])

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
            value={abbreviate(dashboardData?.total_earnings || 0)}
            bgColor={'#28C76F'}
          />
          <DashPallet
            title={'TOTAL FOLLOWUP'}
            bgColor={'#021F4F'}
            value={abbreviate(dashboardData?.follow_ups || 0)}
          />
          <DashPallet
            title={'Total Response'}
            bgColor={theme.primary}
            value={abbreviate(dashboardData?.total_response || 0)}
          />
        </div>
      </header>
      <div className="page--content">
        <PalletItem
          title="Monthly Earnings"
          rightContent={
            <div className="graph-header">
              {!(!month || month.length === 0) && (
                <CSVLink data={month}>
                  <Button tertiary>Export</Button>
                </CSVLink>
              )}
              <DatePicker
                onChange={(date, dateString) => {
                  const [year, month] = dateString.split('-')
                  handleGetMonthData(`${month}-${year}`)
                }}
                picker="month"
              />
            </div>
          }
        >
          <ResponsiveContainer width={'100%'} height="100%">
            {loading.month ? (
              <div className="loading-container">
                <Spinner size={'40px'} />
              </div>
            ) : month ? (
              renderEmptyDisplay()
            ) : (
              <AreaChart
                data={month}
                margin={{ top: 20, right: 30, bottom: 0 }}
              >
                <XAxis dataKey="day" angle={'0'} />
                <YAxis tickFormatter={abbreviate} />
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
            )}
          </ResponsiveContainer>
        </PalletItem>
        <PalletItem
          title="Yearly Earnings"
          rightContent={
            <div className="graph-header">
              {!(!year || year.length === 0) && (
                <CSVLink data={year}>
                  <Button tertiary>Export</Button>
                </CSVLink>
              )}
              <DatePicker
                onChange={(dataString, year) => {
                  handleGetYearData(year)
                }}
                picker="year"
              />
            </div>
          }
        >
          <ResponsiveContainer width={'100%'} height="100%">
            {loading.year ? (
              <div className="loading-container">
                <Spinner size={'40px'} />
              </div>
            ) : (
              <AreaChart data={year} margin={{ top: 20, right: 30, bottom: 0 }}>
                <XAxis dataKey="month" />
                <YAxis tickFormatter={abbreviate} allowDataOverflow={true} />
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
            )}
          </ResponsiveContainer>
        </PalletItem>
      </div>
    </Container>
  )
}

export default DashHome
