import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Switch, Route, useHistory } from 'react-router-dom'
import { Button } from '../../UI'
import { getJobApplications } from '../../store/action'
import { AppRoute } from '../../constants'
import JobAlt from '../JobsAlt'
import JobDetails from '../JobDetails'
import { UsersPallet } from '../../asset/convertedSvg'
import { SectionHeader, TableContainer } from '../../components'
import { columns, dataSource } from './tableData'
import Container from './styles'

const Jobs = () => {
  const { jobLists } = useSelector((s) => s.AppReducer)
  const dispatch = useDispatch()
  const history = useHistory()
  console.log(jobLists, 'KKKK')

  const palletItems = [
    {
      title: 'Total Posted Job Applications',
      value: jobLists ? jobLists.length : 0,
    },
    {
      title: 'Total Published Job Applications',
      value: jobLists ? jobLists.length : 0,
    },

    {
      title: 'Total Unpublished Job Applications',
      value: jobLists ? jobLists.length : 0,
    },
  ]
  useEffect(() => {
    dispatch(getJobApplications())
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
              columns: columns({
                handleAltJob: (row) => {
                  history.push(`${AppRoute.dashboard.jobs.initial}/${row.id}`)
                },
                handleViewDetails: (row) => {
                  history.push(`${AppRoute.dashboard.jobs.details}/${row.id}`)
                },
              }),
              dataSource: dataSource,
              onRow: (record, rowIndex) => {
                return {
                  onClick: (event) => {
                    history.push(
                      `${AppRoute.dashboard.jobs.initial}/${record.key}`,
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

export default Jobs
