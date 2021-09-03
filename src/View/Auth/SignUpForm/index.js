import React from 'react'
import { InputGroup } from '../../../UI'
import Container from './styles'

const SignUpForm = ({ handleInput }) => {
  return (
    <Container>
      <InputGroup
        name="firstName"
        label="First Name"
        onChange={handleInput}
        placeholder="Enter first name"
      />
      <InputGroup
        name="lastName"
        label="Last Name"
        onChange={handleInput}
        placeholder="Enter last name"
      />
      <InputGroup
        name="email"
        label="Email address"
        onChange={handleInput}
        placeholder="Enter email address"
      />
      <InputGroup
        name="phoneNo"
        label="Phone Number"
        type="tel"
        onChange={handleInput}
        placeholder="Enter phone number"
      />
      <InputGroup
        name="password"
        label="Password"
        type="password"
        onChange={handleInput}
        placeholder="Enter password"
      />
    </Container>
  )
}

export default SignUpForm
