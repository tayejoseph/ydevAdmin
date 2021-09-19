import React, { useState } from 'react'
import { useRouteMatch } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { formValidator, scrollDashboardToTop } from '../../helpers'
import { AppRoute } from '../../constants'
import { Button, InputGroup } from '../../UI'
import { SectionHeader } from '../../components'
import { sendSms } from '../../store/action'
import Container from './styles'

const UsersSms = () => {
  const dispatch = useDispatch()
  const [loading, setLoading] = useState(false)
  const { roles } = useSelector((s) => s.adminData)
  const {
    params: { userId },
  } = useRouteMatch()
  const [formData, setFormDate] = useState({
    subject: '',
    message: '',
    role_id: '',
  })

  const handleInput = ({ target: { name, value } }) => {
    setFormDate((s) => ({
      ...s,
      [name]: value,
    }))
  }

  const handleSubmit = async () => {
    if (
      formValidator(document.forms['sms--form'].getElementsByTagName('input'))
    ) {
      setLoading(true)
      try {
        await dispatch(sendSms(formData))
      } finally {
        setLoading(false)
      }
    } else {
      scrollDashboardToTop()
    }
  }
  return (
    <Container>
      <SectionHeader
        title="SMS Users"
        links={[
          { title: 'Users', link: AppRoute.dashboard.users.initial },
          {
            title: 'Single Users',
            link: `${AppRoute.dashboard.users.initial}/?tab=accounts`,
          },
          {
            title: 'SMS Users',
            link: `${AppRoute.dashboard.users.sms}`,
          },
        ]}
      />
      <form
        onSubmit={(e) => {
          e.preventDefault()
          handleSubmit()
        }}
        noValidate
        name="sms--form"
      >
        <InputGroup
          label="Subject"
          onChange={handleInput}
          name="subject"
          value={formData.subject}
        />

        <InputGroup errorClass="role">
          <label>User Type</label>
          <select
            value={formData.role_id}
            name="role_id"
            data-error="role"
            onChange={handleInput}
            required
          >
            <option value={''}>Select a Role</option>
            {roles &&
              roles.map((item) => (
                <option key={item.id} value={item.id}>
                  {item.name}
                </option>
              ))}
          </select>
        </InputGroup>
        <InputGroup>
          <label>Message</label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleInput}
          />
        </InputGroup>
        <Button loading={loading} spinnerWithTxt={true} type="submit">
          Send Email
        </Button>
      </form>
    </Container>
  )
}

export default UsersSms
