import React, { useEffect, useState } from 'react'
import produce from 'immer'
import { useSelector, useDispatch } from 'react-redux'
import { GrFormAdd } from 'react-icons/gr'
import { useRouteMatch, useHistory } from 'react-router-dom'
import { BsTrash } from 'react-icons/bs'
import { Button, InputGroup } from '../../UI'
import { alterJobApplications, getPostedJobDetail } from '../../store/action'
import { formValidator } from '../../helpers'
import { AppRoute } from '../../constants'
import { UsersPallet } from '../../asset/convertedSvg'
import { SectionHeader, TableContainer } from '../../components'
import { columns, dataSource } from './tableData'
import Container from './styles'

const JobDetails = () => {
  const { jobId } = useRouteMatch().params
  const [loading, setLoading] = useState([])
  const [activeJobDetail, setState] = useState('')
  const dispatch = useDispatch()
  const history = useHistory()

  const palletItems = [
    {
      title: 'Total Applicants',
      value: activeJobDetail?.applications?.length,
    },
  ]

  useEffect(() => {
    getPostedJobDetail(jobId).then((response) => {
      if (response && response.data) {
        setState(response.data)
      }
      console.log(response, 'response')
    })
  }, [jobId])

  return (
    <Container>
      <SectionHeader
        title={`Jobs Name: ${activeJobDetail?.title}`}
        links={[
          { title: 'Jobs', link: AppRoute.dashboard.jobs.initial },
          {
            title: 'Job Detail',
            link: `${AppRoute.dashboard.jobs.details}/${jobId}`,
          },
        ]}
        leftSection={
          <div className="top--action--row">
            <Button
              onClick={() => {
                history.push(`${AppRoute.dashboard.jobs.initial}/${jobId}`)
              }}
            >
              Edit Job
            </Button>
            <Button>Publish Job</Button>
          </div>
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
          title: 'Application Lists',
          loading: activeJobDetail === '',
          columns: columns({
            loading,
            handleDeleteJob: (row) => {
              setLoading((s) => [...s, row.id])
              dispatch(alterJobApplications({ id: row.id }, 'delete')).finally(
                () => {
                  setLoading((s) => s.filter((item) => item !== row.id))
                },
              )
              history.push(`${AppRoute.dashboard.jobs.details}/${row.id}`)
            },
          }),
          dataSource: activeJobDetail?.applications,
        }}
      />
    </Container>
  )
}

export default JobDetails
