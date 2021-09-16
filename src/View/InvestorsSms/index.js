import React, { useState } from 'react'
import { AppRoute } from '../../constants'
import { useRouteMatch } from 'react-router-dom'
import { Button, InputGroup } from '../../UI'
import { SectionHeader } from '../../components'
import Container from './styles'

const InvestorsSms = () => {
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
        title="SMS Investors"
        links={[
          { title: 'Investors', link: AppRoute.dashboard.borrowers.initial },
          {
            title: 'SMS Investors',
            link: `${AppRoute.dashboard.investors.sms}`,
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
        <Button type="submit">Send SMS</Button>
      </form>
    </Container>
  )
}

export default InvestorsSms
