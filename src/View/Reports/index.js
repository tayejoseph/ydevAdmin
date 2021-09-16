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
  ReportsBorrower,
  BorrowerDetails,
  ReportsLoans,
  ReportSettlement,
  ReportCollection,
} from '../'
import Container from './styles'

const palletItems = [
  { title: 'Total Borrowers', value: '5.5k' },
  { title: 'Open Loans Balance', value: '5.5k' },
  { title: 'Total Paid', value: '40' },
]

const Reports = () => {
  const history = useHistory()
  return (
    <Switch>
      {/* <Route
        path={`${AppRoute.dashboard.reports.email}`}
        component={BorrowersEmail}
      /> */}
      <Route
        path={`${AppRoute.dashboard.reports.borrowers}`}
        component={ReportsBorrower}
      />
      <Route
        path={`${AppRoute.dashboard.reports.loan}`}
        component={ReportsLoans}
      />
      <Route
        path={`${AppRoute.dashboard.reports.collection}`}
        component={ReportCollection}
      />
      <Route
        path={`${AppRoute.dashboard.reports.settlement}`}
        component={ReportSettlement}
      />
      {/* <Route
        path={`${AppRoute.dashboard.reports.initial}/:userId`}
        component={BorrowerDetails}
        exact
      /> */}
      {/* <Route path={`${AppRoute.dashboard.reports.initial}`} exact>
        <Container>
          <SectionHeader
            title="Borrowers"
            links={[{ title: 'Borrowers', link: AppRoute.dashboard.borrowers }]}
            leftSection={
              <Button
                rounded
                onClick={() => {
                  history.push(`${AppRoute.dashboard.reports.new}`)
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
                      `${AppRoute.dashboard.reports.initial}/${record.key}?tab=creditDetails`,
                    )
                  },
                }
              },
            }}
          />
        </Container>
      </Route> */}
    </Switch>
  )
}

export default Reports
