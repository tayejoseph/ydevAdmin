import React, { useState } from 'react'
import { AppRoute } from '../../constants'
import { useRouteMatch } from 'react-router-dom'
import { Button, InputGroup } from '../../UI'
import { SectionHeader } from '../../components'
import Container from './styles'

const BorrowersSms = () => {
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
        title="SMS Borrowers"
        links={[
          { title: 'Borrowers', link: AppRoute.dashboard.borrowers.initial },
          {
            title: 'Single Borrowers',
            link: `${AppRoute.dashboard.borrowers.initial}/?tab=creditDetails`,
          },
          {
            title: 'SMS Borrowers',
            link: `${AppRoute.dashboard.borrowers.sms}`,
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
          label="Borrowers Type"
          onChange={handleInput}
          name="borrowersType"
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

export default BorrowersSms
