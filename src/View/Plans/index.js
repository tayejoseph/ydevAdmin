import React, { useEffect } from 'react'
import { Switch, Route, useHistory } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { AppRoute } from '../../constants'
import { Button } from '../../UI'
import { UsersPallet } from '../../asset/convertedSvg'
import { SectionHeader, TableContainer } from '../../components'
import { UserDetails, PlansAlt } from '../'
import { getPlans } from '../../store/action'
import { columns } from './tableData'
import Container from './styles'

const Plans = () => {
  const dispatch = useDispatch()
  const { planLists } = useSelector((state) => state.adminData)
  const history = useHistory()
  const palletItems = [
    {
      title: 'Total Number of Plans',
      value: planLists ? planLists.length : 0,
    },
    { title: 'Most Used Plan', value: 'Basic' },
    { title: 'Least Used Plan', value: 'Standard' },
  ]

  useEffect(() => {
    dispatch(getPlans())
  }, [dispatch])

  return (
    <Switch>
      <Route
        path={`${AppRoute.dashboard.plans.details}/:planId`}
        component={UserDetails}
      />

      <Route
        path={`${AppRoute.dashboard.plans.initial}/:planId`}
        component={PlansAlt}
      />
      <Route path={AppRoute.dashboard.plans.inital} exact>
        <Container>
          <SectionHeader
            title="Plans"
            links={[{ title: 'Plans', link: AppRoute.dashboard.plans.initial }]}
            leftSection={
              <Button
                rounded
                onClick={() =>
                  history.push(`${AppRoute.dashboard.plans.initial}/new`)
                }
              >
                Add Plan
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
              title: 'All Plans',
              columns: columns({
                handleDeleteClick: (row) => {
                  console.log(row)
                },
                handleEditClick: (row) => {
                  history.push(`${AppRoute.dashboard.plans.initial}/${row.id}`)
                },
              }),
              dataSource: planLists,
              onRow: (record, rowIndex) => {
                return {
                  onClick: (event) => {
                    history.push(
                      `${AppRoute.dashboard.plans.details}/1?tab=accounts`,
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

export default Plans
