import React from 'react'
import { InputGroup, Button } from '../../../UI'
import Container from './styles'

const LoginForm = ({ handleInput, formData, loading }) => {
  return (
    <Container>
      <InputGroup
        name="email"
        label="Email Address"
        value={formData.email}
        onChange={handleInput}
        data-label="Email"
        required
        placeholder="Enter your email address"
      />
      <InputGroup
        name="password"
        label="Password"
        onChange={handleInput}
        value={formData.password}
        type="password"
        required
        placeholder="********"
      />
      <div className="forgot--password__container">
        {/* <Link to="/">Forgot Password?</Link> */}
        <br />
      </div>
      <Button full loading={loading} spinnerWithTxt={true} type="submit">
        Login
      </Button>
    </Container>
  )
}

export default LoginForm
