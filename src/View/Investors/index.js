import React from 'react'
import { Switch, Route, useHistory } from 'react-router-dom'
import { AppRoute } from '../../constants'
import { Button } from '../../UI'
import { UsersPallet } from '../../asset/convertedSvg'
import { SectionHeader, TableContainer } from '../../components'
import { InvestorsAlt, InvestorsEmail, InvestorsSms } from '../'
import { columns, dataSource } from './tableData'
import Container from './styles'

const palletItems = [
  { title: 'Todays Number \n of Investors', value: '5.5k' },
  { title: 'Active Investors', value: '2.5k' },
  { title: 'Total Amount Invested', value: '32.7' },
]

const Investors = () => {
  const history = useHistory()
  return (
    <Switch>
      <Route
        path={`${AppRoute.dashboard.investors.initial}/:action`}
        component={InvestorsAlt}
      />
      <Route
        path={`${AppRoute.dashboard.investors.sms}`}
        component={InvestorsSms}
      />
      <Route
        path={`${AppRoute.dashboard.investors.email}`}
        component={InvestorsEmail}
      />
      <Route path={AppRoute.dashboard.investors.inital} exact>
        <Container>
          <SectionHeader
            title="Investors"
            links={[
              {
                title: 'Repayments',
                link: AppRoute.dashboard.repayment.initial,
              },
            ]}
            leftSection={
              <Button
                rounded
                onClick={() =>
                  history.push(`${AppRoute.dashboard.investors.initial}/add`)
                }
              >
                Add Investor
              </Button>
            }
          />
          <div className="pallet--grid__container">
            {palletItems.map((item) => (
              <div className="pallet--item">
                <h1>{item.value}</h1>
                <div>
                  <p>{item.title}</p>
                  <div>
                    <UsersPallet />
                  </div>
                </div>
              </div>
            ))}
          </div>

          <TableContainer
            {...{
              title: 'All Investors',
              columns,
              dataSource,
              onRow: (record, rowIndex) => {
                return {
                  onClick: (event) => {
                    history.push(
                      `${AppRoute.dashboard.repayment.initial}/${record.key}?tab=accounts`,
                    )
                  },
                }
              },
            }}
          />
        </Container>
      </Route>
    </Switch>
  )
}

export default Investors
