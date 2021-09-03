import React from 'react'
import { Route, useHistory } from 'react-router-dom'
import { AppRoute } from '../../constants'
import { Button } from '../../UI'
import { UsersPallet } from '../../asset/convertedSvg'
import { SectionHeader, TableContainer } from '../../components'
import { columns, dataSource } from './tableData'
import BorrowAction from './BorrowAction'
import Container from './styles'

const palletItems = [
  { title: 'Total Borrowers', value: '5.5k' },
  { title: 'Open Loans Balance', value: '5.5k' },
  { title: 'Total Paid', value: '40' },
]

const Borrowers = () => {
  const history = useHistory()
  return (
    <Container>
      <SectionHeader
        title="Borrowers"
        links={[
          { title: 'Borrowers', link: AppRoute.dashboard.borrowers },
          { title: 'View All Borrowers', link: '' },
        ]}
        leftSection={
          <Button
            rounded
            onClick={() => {
              history.push(`${AppRoute.dashboard.borrowers}/add`)
            }}
          >
            Add New Borrower
          </Button>
        }
      />
      <Route
        path={`${AppRoute.dashboard.borrowers}/:action`}
        component={BorrowAction}
      />
      <Route path={AppRoute.dashboard.borrowers} exact>
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

        <TableContainer {...{ title: 'All Borrowers', columns, dataSource }} />
      </Route>
    </Container>
  )
}

export default Borrowers
