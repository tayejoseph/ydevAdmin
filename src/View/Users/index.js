import React, { useEffect } from 'react'
import { Switch, Route, useHistory } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { AppRoute } from '../../constants'
import { Button } from '../../UI'
import { UsersPallet } from '../../asset/convertedSvg'
import { SectionHeader, TableContainer } from '../../components'
import { UserDetails, UsersEmail, UsersSms, UsersNew } from '../'
import { getUsers } from '../../store/action'
import { columns } from './tableData'
import Container from './styles'

const Users = () => {
  const dispatch = useDispatch()
  const { usersData } = useSelector((state) => state.adminData)
  const history = useHistory()
  const palletItems = [
    {
      title: 'Total Number of Users',
      value: Number(usersData?.total_number_of_users),
    },
    { title: 'Active Users', value: Number(usersData?.active_users) },
    { title: 'Banned users', value: Number(usersData?.banned_users) },
  ]

  useEffect(() => {
    dispatch(getUsers())
  }, [dispatch])

  return (
    <Switch>
      <Route
        path={`${AppRoute.dashboard.users.email}`}
        component={UsersEmail}
      />
      <Route path={`${AppRoute.dashboard.users.sms}`} component={UsersSms} />
      <Route
        path={`${AppRoute.dashboard.users.details}/:userId`}
        component={UserDetails}
      />

      <Route
        path={`${AppRoute.dashboard.users.initial}/:userId`}
        component={UsersNew}
      />
      <Route path={AppRoute.dashboard.users.inital} exact>
        <Container>
          <SectionHeader
            title="Users"
            links={[{ title: 'Users', link: AppRoute.dashboard.users.initial }]}
            leftSection={
              <Button
                rounded
                onClick={() =>
                  history.push(`${AppRoute.dashboard.users.initial}/new`)
                }
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
              columns: columns({
                handleDeleteClick: (row) => {
                  console.log(row)
                },
                handleEditClick: (row) => {
                  history.push(`${AppRoute.dashboard.users.initial}/${row.id}`)
                },
              }),
              dataSource: usersData?.users,
              onRow: (record, rowIndex) => {
                return {
                  onClick: (event) => {
                    history.push(
                      `${AppRoute.dashboard.users.details}/${record.id}?tab=accounts`,
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
