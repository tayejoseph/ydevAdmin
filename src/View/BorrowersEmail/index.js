import React, { useState } from 'react'
import { useRouteMatch } from 'react-router-dom'
import { AppRoute } from '../../constants'
import { Button, InputGroup } from '../../UI'
import { SectionHeader } from '../../components'
import Container from './styles'

const BorrowersEmail = () => {
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
        title="Email Borrowers"
        links={[
          { title: 'Borrowers', link: AppRoute.dashboard.borrowers.initial },
          {
            title: 'Single Borrowers',
            link: `${AppRoute.dashboard.borrowers.initial}?tab=creditDetails`,
          },
          {
            title: 'Email Borrowers',
            link: `${AppRoute.dashboard.borrowers.email}`,
          },
        ]}
      />
      <form>
        <div className="input--row">
          <InputGroup
            label="Subject"
            onChange={handleInput}
            name="subject"
            value={formData.subject}
          />
          <InputGroup
            label="Borrowers category"
            onChange={handleInput}
            name="borrowersCat"
            value={formData.userType}
          />
        </div>
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

export default BorrowersEmail
