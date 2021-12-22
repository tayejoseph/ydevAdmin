import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Switch, Route, useHistory } from 'react-router-dom'
import { message } from 'antd'
import { Button } from '../../UI'
import { getPostedJobs, alterJobPost } from '../../store/action'
import { AppRoute } from '../../constants'
import JobAlt from '../JobsAlt'
import JobDetails from '../JobDetails'
import { UsersPallet } from '../../asset/convertedSvg'
import { SectionHeader, TableContainer } from '../../components'
import { columns } from './tableData'
import Container from './styles'

const Jobs = () => {
  const [loading, setLoading] = useState([])
  const { jobLists } = useSelector((s) => s.AppReducer)
  const dispatch = useDispatch()
  const history = useHistory()

  const palletItems = [
    {
      title: 'Total Job Applications',
      value: jobLists ? jobLists.length : 0,
    },
  ]

  useEffect(() => {
    dispatch(getPostedJobs())
  }, [dispatch])

  return (
    <Switch>
      <Route
        path={`${AppRoute.dashboard.jobs.details}/:jobId`}
        component={JobDetails}
      />
      <Route
        path={`${AppRoute.dashboard.jobs.initial}/:action`}
        component={JobAlt}
        exact
      />
      <Route path={AppRoute.dashboard.jobs.initial} exact>
        <Container>
          <SectionHeader
            title="Jobs"
            links={[]}
            leftSection={
              <Button
                rounded
                onClick={() =>
                  history.push(`${AppRoute.dashboard.jobs.initial}/new`)
                }
              >
                Add Application
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
              title: 'Posted Jobs',
              loading: jobLists === '',
              columns: columns({
                loading,
                handleAltJob: (row) => {
                  history.push(`${AppRoute.dashboard.jobs.initial}/${row.id}`)
                },
                handleViewDetails: (row) => {
                  history.push(`${AppRoute.dashboard.jobs.details}/${row.id}`)
                },
                handleAltPublish: (row) => {
                  setLoading((s) => [...s, `pub-${row.id}`])
                  dispatch(
                    alterJobPost({
                      id: row.id,
                      ...row,
                      published: !row.published,
                    }),
                  ).finally(() => {
                    setLoading((s) =>
                      s.filter((item) => item !== `pub-${row.id}`),
                    )
                  })
                },
                handleDelete: (row) => {
                  setLoading((s) => [...s, row.id])
                  dispatch(alterJobPost({ id: row.id }, 'delete')).finally(
                    () => {
                      message.success('Successfull deleted posted job')
                      setLoading((s) => s.filter((item) => item !== row.id))
                    },
                  )
                },
              }),
              dataSource: jobLists,
            }}
          />
        </Container>
      </Route>
    </Switch>
  )
}

export default Jobs
