import React, { useState } from 'react'
import { useRouteMatch } from 'react-router-dom'
import { Button, InputGroup } from '../../../UI'
import Container from './styles'

const General = () => {
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
      <form>
        <section>
          <div className="input--row">
            <InputGroup
              label="First Name"
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
          <InputGroup
            label="Email"
            onChange={handleInput}
            type="email"
            name="email"
            value={formData.email}
          />
          <InputGroup
            label="Password"
            onChange={handleInput}
            type="password"
            name="password"
            value={formData.password}
          />
          <Button type="submit">Change Password</Button>
        </section>

        <h3>Business Information</h3>
        <section>
          <div className="input--row">
            <InputGroup
              label="Business Name"
              onChange={handleInput}
              name="businessName"
              value={formData.businessName}
            />
            <InputGroup
              label="Phone Number"
              onChange={handleInput}
              name="phoneNo"
              value={formData.phoneNo}
            />
          </div>
          <div className="input--row">
            <InputGroup
              label="Business Email"
              onChange={handleInput}
              type="email"
              name="businessEmail"
              value={formData.businessEmail}
            />
            <InputGroup
              label="Business Address"
              onChange={handleInput}
              name="businessAddress"
              value={formData.businessAddress}
            />
          </div>
        </section>
      </form>
    </Container>
  )
}

export default General
