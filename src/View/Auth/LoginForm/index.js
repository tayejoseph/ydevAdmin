import React from 'react'
import { Link } from 'react-router-dom'
import { InputGroup, Button } from '../../../UI'
import Container from './styles'

const LoginForm = ({ handleInput }) => {
  return (
    <Container>
      <InputGroup
        name="email"
        label="Email Address"
        onChange={handleInput}
        placeholder="enter your email address"
      />
      <InputGroup
        name="password"
        label="Password"
        onChange={handleInput}
        type="password"
        placeholder="********"
      />
      <div className="forgot--password__container">
        <Link to="/">Forgot Password?</Link>
      </div>
      <Button full type="submit">
        Login
      </Button>
    </Container>
  )
}

export default LoginForm
