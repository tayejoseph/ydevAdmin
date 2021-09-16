import React, { useState } from 'react'
import { useRouteMatch } from 'react-router-dom'
import { AppRoute } from '../../constants'
import { Button, InputGroup } from '../../UI'
import { SectionHeader } from '../../components'
import Container from './styles'

const InvestorsAlt = () => {
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
        title="Add Investor"
        links={[
          { title: 'Investors', link: AppRoute.dashboard.investors.initial },
          {
            title: 'Add Investor',
            link: `${AppRoute.dashboard.investors.initial}/add`,
          },
        ]}
      />
      <form>
        <section>
          <div className="input--row">
            <InputGroup
              label="FirstName"
              onChange={handleInput}
              name="firstName"
              value={formData.firstName}
            />
            <InputGroup
              label="Last Name"
              onChange={handleInput}
              name="lastName"
              value={formData.lastName}
            />
          </div>
          <div className="input--row">
            <InputGroup
              label="Business name"
              onChange={handleInput}
              name="businessName"
              value={formData.businessName}
            />
            <InputGroup
              label="Phone Number"
              type="tel"
              onChange={handleInput}
              name="phoneNo"
              value={formData.phoneNo}
            />
          </div>
          <InputGroup
            label="Password"
            type="password"
            onChange={handleInput}
            name="password"
            value={formData.password}
          />
        </section>
        <section>
          <h3>Security</h3>
          <InputGroup
            label="Gender"
            type="number"
            name="amount"
            require
            value={formData.amount}
            onChange={handleInput}
          />
          <InputGroup
            label="Loan Release date"
            type="date"
            name="loanDate"
            value={formData.loanDate}
            onChange={handleInput}
          />
        </section>
        <Button type="submit">Send Email</Button>
      </form>
    </Container>
  )
}

export default InvestorsAlt
