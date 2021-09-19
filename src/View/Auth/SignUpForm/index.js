import React from 'react'
import { InputGroup } from '../../../UI'
import Container from './styles'

const SignUpForm = ({ handleInput, formData, loading }) => {
  return (
    <Container>
      <InputGroup
        name="firstName"
        label="First Name"
        value={formData.firstName}
        onChange={handleInput}
        placeholder="Enter first name"
      />
      <InputGroup
        name="lastName"
        label="Last Name"
        value={formData.lastName}
        onChange={handleInput}
        placeholder="Enter last name"
      />
      <InputGroup
        name="email"
        label="Email address"
        value={formData.email}
        onChange={handleInput}
        placeholder="Enter email address"
      />
      <InputGroup
        name="phoneNo"
        label="Phone Number"
        value={formData.phoneNo}
        type="tel"
        onChange={handleInput}
        placeholder="Enter phone number"
      />
      <InputGroup
        name="password"
        label="Password"
        value={formData.password}
        type="password"
        onChange={handleInput}
        placeholder="Enter password"
      />
    </Container>
  )
}

export default SignUpForm
