import React from 'react'
import { Switch, Route, useHistory } from 'react-router-dom'
import { AppRoute } from '../../constants'
import { Button, FloatingInput } from '../../UI'
import { UsersPallet } from '../../asset/convertedSvg'
import { SectionHeader, TableContainer } from '../../components'
import { UserDetails, UsersEmail, UsersSms, UsersNew } from '../'
import { columns, dataSource } from './tableData'
import Container from './styles'

const palletItems = [
  { title: 'Total Credit \n Disbursed', value: '5.5k' },
  { title: 'Open Loans \n Balance', value: '2.5k' },
  { title: 'Total Paid', value: '40' },
]

const CreditDue = () => {
  const history = useHistory()
  return (
    <Container>
      <SectionHeader
        title="Due Credit"
        links={[
          { title: 'Credit', link: AppRoute.dashboard.credit.initial },
          { title: 'Due Credit', link: AppRoute.dashboard.credit.due },
        ]}
        leftSection={
          <Button
            rounded
            onClick={() => history.push(AppRoute.dashboard.users.new)}
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

      <div className="due--actions">
        <div className="input--row">
          <FloatingInput label="Start Date" type="date" />
          <FloatingInput label="End Date" type="date" />
        </div>
        <div className="check--group">
          <label>
            <input type="checkbox" />
            Include loans where system generated penalty is added between the
            above dates
          </label>
          <label>
            <input type="checkbox" />
            Include due loans with zero pending due amounts
          </label>
        </div>
      </div>

      <TableContainer
        {...{
          title: 'Due Loan',
          columns,
          dataSource,
          onRow: (record, rowIndex) => {
            return {
              onClick: (event) => {
                history.push(
                  `${AppRoute.dashboard.users.initial}/${record.key}?tab=accounts`,
                )
              },
            }
          },
        }}
      />
    </Container>
  )
}

export default CreditDue
