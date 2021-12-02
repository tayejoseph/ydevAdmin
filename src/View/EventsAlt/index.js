import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useRouteMatch, useHistory } from 'react-router-dom'
import { Button, InputGroup } from '../../UI'
import { alterEvents, addEvents } from '../../store/action'
import { formValidator } from '../../helpers'
import { AppRoute } from '../../constants'
import { SectionHeader } from '../../components'
import Container from './styles'

const EventsAlt = () => {
  const history = useHistory()
  const { eventLists } = useSelector((s) => s.AppReducer)
  const [loading, setLoading] = useState(false)
  const { action } = useRouteMatch().params
  console.log(action, 'action')
  const [formData, setFormData] = useState(() =>
    action !== 'new'
      ? eventLists.find((item) => Number(item.id) === Number(action))
      : {
          name: '',
          url: '',
          details: '',
          event_date: '',
        },
  )
  const dispatch = useDispatch()

  const handleInput = ({ target: { name, value } }) => {
    setFormData((s) => ({
      ...s,
      [name]: value,
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (
      formValidator([
        ...document.forms['event-form'].getElementsByTagName('input'),
        ...document.forms['event-form'].getElementsByTagName('textarea'),
      ])
    ) {
      setLoading(true)
      try {
        action === 'new'
          ? await dispatch(addEvents(formData))
          : await dispatch(alterEvents(formData))
        history.goBack()
      } finally {
        setLoading(false)
      }
    }
  }

  return (
    <Container>
      <SectionHeader
        title={`${action === 'new' ? 'Create' : 'Edit'} Event`}
        links={[
          { title: 'Events', link: AppRoute.dashboard.events.initial },
          {
            title: `${action === 'new' ? 'Create' : 'Alt'} Events`,
            link: `${AppRoute.dashboard.events.initial}/${action}`,
          },
        ]}
      />
      <form onSubmit={handleSubmit} name="event-form" noValidate>
        <InputGroup
          label="Event Name"
          name="name"
          value={formData.name}
          onChange={handleInput}
          data-label="Event name"
          required
        />
        <InputGroup
          type="url"
          label="Event Url"
          value={formData.url}
          required
          name="url"
          data-label={'Event url'}
          onChange={handleInput}
        />
        <InputGroup
          type="datetime-local"
          label="Event Date"
          defaultValue={formData.event_date}
          required
          name="event_date"
          data-label={'Event date'}
          onChange={handleInput}
        />
        <InputGroup
          type="textarea"
          label="Event Details"
          value={formData.details}
          name="details"
          onChange={handleInput}
          required
          data-label={'Event details'}
        />
        <Button type="submit" loading={loading} spinnerWithTxt>
          {action !== 'add' ? 'Save' : 'Submit'}
        </Button>
      </form>
    </Container>
  )
}

export default EventsAlt
