import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Switch, Route, useHistory } from 'react-router-dom'
import { Button } from '../../UI'
import { getEvents, alterEvents } from '../../store/action'
import { AppRoute } from '../../constants'
import EventsAlt from '../EventsAlt'
import { UsersPallet } from '../../asset/convertedSvg'
import { SectionHeader, TableContainer } from '../../components'
import { columns, dataSource } from './tableData'
import Container from './styles'

const Events = () => {
  const [loading, setLoading] = useState([])
  const { eventLists } = useSelector((s) => s.AppReducer)
  const dispatch = useDispatch()
  const history = useHistory()

  const palletItems = [
    {
      title: 'Total Events',
      value: eventLists ? eventLists.length : 0,
    },
  ]
  useEffect(() => {
    dispatch(getEvents())
  }, [dispatch])

  return (
    <Switch>
      <Route
        path={`${AppRoute.dashboard.events.initial}/:id`}
        component={EventsAlt}
        exact
      />
      <Route path={AppRoute.dashboard.events.initial} exact>
        <Container>
          <SectionHeader
            title="Events"
            links={[]}
            leftSection={
              <Button
                rounded
                onClick={() =>
                  history.push(`${AppRoute.dashboard.events.initial}/new`)
                }
              >
                Add Event
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
              title: 'Event Lists',
              columns: columns({
                loading,
                handleDeleteEvent: (row) => {
                  setLoading([...loading, row.id])
                  dispatch(alterEvents(row, 'delete')).finally(() => {
                    setLoading(loading.filter((item) => item === row.id))
                  })
                  history.push(`${AppRoute.dashboard.events.initial}/${row.id}`)
                },
                handleViewDetails: (row) => {
                  history.push(`${AppRoute.dashboard.events}/${row.id}`)
                },
              }),
              dataSource: dataSource,
              onRow: (record, rowIndex) => {
                return {
                  onClick: (event) => {
                    history.push(
                      `${AppRoute.dashboard.events.initial}/${record.key}`,
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

export default Events
