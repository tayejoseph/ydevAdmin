import React, { useEffect, useState } from 'react'
import produce from 'immer'
import { useSelector, useDispatch } from 'react-redux'
import { GrFormAdd } from 'react-icons/gr'
import { useRouteMatch, useHistory } from 'react-router-dom'
import { BsTrash } from 'react-icons/bs'
import { Button, InputGroup } from '../../UI'
import { getJobApplications } from '../../store/action'
import { formValidator } from '../../helpers'
import { AppRoute } from '../../constants'
import { SectionHeader, TableContainer } from '../../components'
import { columns, dataSource } from './tableData'
import Container from './styles'

const EventsAlt = () => {
  const { action } = useRouteMatch().params

  const [formData, setFormData] = useState({
    title: '',
    location: '',
    jobType: '',
    roles: [''],
    experience: [''],
    skills: [''],
  })
  const { jobLists } = useSelector((s) => s.AppReducer)
  const dispatch = useDispatch()
  const history = useHistory()
  console.log(jobLists, 'KKKK')

  useEffect(() => {
    dispatch(getJobApplications())
  }, [dispatch])

  return (
    <Container>
      <SectionHeader
        title={`${action !== 'add' ? 'Edit' : 'Add'} Event`}
        links={[
          { title: 'Events', link: AppRoute.dashboard.events.initial },
          {
            title: 'Alt Events',
            link: `${AppRoute.dashboard.events.initial}/${action}`,
          },
        ]}
      />
      <form>
        <InputGroup label="Event Name" />
        <InputGroup type="url" label="Registration Url" />
        <InputGroup type="textarea" label="Event Details" />
        <Button type="submit">{action !== 'add' ? 'Save' : 'Submit'}</Button>
      </form>
    </Container>
  )
}

export default EventsAlt
