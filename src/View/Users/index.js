import React from 'react'
import { Switch, Route, useHistory } from 'react-router-dom'
import { AppRoute } from '../../constants'
import { Button } from '../../UI'
import { UsersPallet } from '../../asset/convertedSvg'
import { SectionHeader, TableContainer } from '../../components'
import { UserDetails, UsersEmail, UsersSms, UsersNew } from '../'
import { columns, dataSource } from './tableData'
import Container from './styles'

const palletItems = [
  { title: 'Total Number of Users', value: '5.5k' },
  { title: 'Active Users', value: '5.5k' },
  { title: 'Banned users', value: '40' },
]

const Users = () => {
  const history = useHistory()
  return (
    <Switch>
      <Route path={AppRoute.dashboard.users.new} component={UsersNew} />
      <Route
        path={`${AppRoute.dashboard.users.email}`}
        component={UsersEmail}
      />
      <Route path={`${AppRoute.dashboard.users.sms}`} component={UsersSms} />
      <Route
        path={`${AppRoute.dashboard.users.initial}/:userId`}
        component={UserDetails}
      />
      <Route path={AppRoute.dashboard.users.inital} exact>
        <Container>
          <SectionHeader
            title="Users"
            links={[{ title: 'Users', link: AppRoute.dashboard.users.initial }]}
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

          <TableContainer
            {...{
              title: 'All Users',
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
      </Route>
    </Switch>
  )
}

export default Users
