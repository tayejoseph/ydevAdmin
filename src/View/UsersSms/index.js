import React, { useState } from 'react'
import { useRouteMatch } from 'react-router-dom'
import { AppRoute } from '../../constants'
import { Button, InputGroup } from '../../UI'
import { SectionHeader } from '../../components'
import Container from './styles'

const UsersSms = () => {
  const {
    params: { userId },
  } = useRouteMatch()
  const [formData, setFormDate] = useState({
    subject: '',
    userType: '',
  })

  const handleInput = ({ target: { name, value } }) => {
    setFormDate((s) => ({
      ...s,
      [name]: value,
    }))
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
      <form>
        <InputGroup
          label="Subject"
          onChange={handleInput}
          name="subject"
          value={formData.subject}
        />
        <InputGroup
          label="User Type"
          onChange={handleInput}
          name="userType"
          value={formData.userType}
        />
        <InputGroup>
          <label>Message</label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleInput}
          />
        </InputGroup>
        <Button type="submit">Send Email</Button>
      </form>
    </Container>
  )
}

export default UsersSms
