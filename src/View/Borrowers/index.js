import React from 'react'
import { Route, useHistory, Switch } from 'react-router-dom'
import { AppRoute } from '../../constants'
import { Button } from '../../UI'
import { UsersPallet } from '../../asset/convertedSvg'
import { SectionHeader, TableContainer } from '../../components'
import { columns, dataSource } from './tableData'
import {
  BorrowersNew,
  BorrowersEmail,
  BorrowersSms,
  BorrowerDetails,
} from '../'
import Container from './styles'

const palletItems = [
  { title: 'Total Borrowers', value: '5.5k' },
  { title: 'Open Loans Balance', value: '5.5k' },
  { title: 'Total Paid', value: '40' },
]

const Borrowers = () => {
  const history = useHistory()
  return (
    <Switch>
      <Route path={AppRoute.dashboard.borrowers.new} component={BorrowersNew} />
      <Route
        path={`${AppRoute.dashboard.borrowers.email}`}
        component={BorrowersEmail}
      />
      <Route
        path={`${AppRoute.dashboard.borrowers.sms}`}
        component={BorrowersSms}
      />
      <Route
        path={`${AppRoute.dashboard.borrowers.initial}/:userId`}
        component={BorrowerDetails}
        exact
      />
      <Route path={`${AppRoute.dashboard.borrowers.initial}`} exact>
        <Container>
          <SectionHeader
            title="Borrowers"
            links={[{ title: 'Borrowers', link: AppRoute.dashboard.borrowers }]}
            leftSection={
              <Button
                rounded
                onClick={() => {
                  history.push(`${AppRoute.dashboard.borrowers.new}`)
                }}
              >
                Add New Borrower
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
              title: 'All Borrowers',
              columns,
              dataSource,
              onRow: (record, rowIndex) => {
                return {
                  onClick: (event) => {
                    history.push(
                      `${AppRoute.dashboard.borrowers.initial}/${record.key}?tab=creditDetails`,
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

export default Borrowers
