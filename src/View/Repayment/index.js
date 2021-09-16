import React from 'react'
import { Switch, Route, useHistory } from 'react-router-dom'
import { AppRoute } from '../../constants'
import { Button } from '../../UI'
import { UsersPallet } from '../../asset/convertedSvg'
import { SectionHeader, TableContainer } from '../../components'
import { RepaymentBulk } from '../'
import { columns, dataSource } from './tableData'
import Container from './styles'

const palletItems = [
  { title: 'Todays Repayments', value: '5.5k' },
  { title: 'Last 7 Days \n Repayments', value: '2.5k' },
  { title: 'Last 30 Days \n Repayments', value: '40' },
]

const Repayment = () => {
  const history = useHistory()
  return (
    <Switch>
      <Route
        path={`${AppRoute.dashboard.repayment.bulk}`}
        component={RepaymentBulk}
      />
      <Route path={AppRoute.dashboard.repayment.inital} exact>
        <Container>
          <SectionHeader
            title="Repayments"
            links={[
              {
                title: 'Repayments',
                link: AppRoute.dashboard.repayment.initial,
              },
            ]}
            leftSection={
              <Button
                rounded
                onClick={() => history.push(AppRoute.dashboard.repayment.bulk)}
              >
                Add Bulk Repayment
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
              title: 'All Repayments',
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

export default Repayment
