import React from 'react'
import { Switch, Route, useHistory } from 'react-router-dom'
import { AppRoute } from '../../constants'
import { Button } from '../../UI'
import { UsersPallet } from '../../asset/convertedSvg'
import { SectionHeader, TableContainer } from '../../components'
import {
  CreditCalulator,
  CreditMissed,
  CreditOutstanding,
  CreditDue,
} from '../'
import { columns, dataSource } from './tableData'
import Container from './styles'

const palletItems = [
  { title: 'Total Credit \n Disbursed', value: '5.5k' },
  { title: 'Open Credit Balance', value: '2.5k' },
  { title: 'Total Paid', value: '40' },
]

const Credit = () => {
  const history = useHistory()
  return (
    <Switch>
      <Route path={AppRoute.dashboard.credit.due} component={CreditDue} />
      <Route
        path={`${AppRoute.dashboard.credit.missed}`}
        component={CreditMissed}
      />
      <Route
        path={`${AppRoute.dashboard.credit.outstanding}`}
        component={CreditOutstanding}
      />
      <Route
        path={`${AppRoute.dashboard.credit.calculator}`}
        component={CreditCalulator}
      />
      <Route path={AppRoute.dashboard.credit.inital} exact>
        <Container>
          <SectionHeader
            title="All Credit"
            links={[
              { title: 'Credit', link: AppRoute.dashboard.credit.initial },
            ]}
            leftSection={
              <Button
                rounded
                onClick={() => history.push(AppRoute.dashboard.credit.new)}
              >
                Add New User
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
              title: 'All Credit',
              columns,
              dataSource,
              onRow: (record, rowIndex) => {
                return {
                  onClick: (event) => {
                    history.push(
                      `${AppRoute.dashboard.credit.initial}/${record.key}?tab=accounts`,
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

export default Credit
