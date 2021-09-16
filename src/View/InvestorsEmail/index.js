import React, { useState } from 'react'
import { useRouteMatch } from 'react-router-dom'
import { AppRoute } from '../../constants'
import { Button, InputGroup } from '../../UI'
import { SectionHeader } from '../../components'
import Container from './styles'

const InvestorsEmail = () => {
  const {
    params: { userId },
  } = useRouteMatch()
  const [formData, setFormDate] = useState({})

  const handleInput = ({ target: { name, value } }) => {
    setFormDate((s) => ({
      ...s,
      [name]: value,
    }))
  }

  return (
    <Container>
      <SectionHeader
        title="Email Investors"
        links={[
          { title: 'Investors', link: AppRoute.dashboard.investors.initial },
          {
            title: 'Email Investors',
            link: `${AppRoute.dashboard.investors.email}`,
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

export default InvestorsEmail
