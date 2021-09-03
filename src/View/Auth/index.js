import React, { useState } from 'react'
import { useHistory, Route } from 'react-router-dom'
import { AuthIllustration, AppLogo } from '../../asset/convertedSvg'
import { AppRoute } from '../../constants'
import LoginForm from './LoginForm'
import SignUpForm from './SignUpForm'
import Container from './styles'

const Auth = () => {
  const [formData, setFormState] = useState({})

  const history = useHistory()

  const handleInput = ({ target: { value, name } }) => {
    setFormState((s) => ({
      ...s,
      [name]: value,
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    history.push(AppRoute.dashboard.initial)
  }

  return (
    <Container>
      <div className="col--1">
        <header>
          <AppLogo />
        </header>
        <div className="content--container">
          <AuthIllustration />
        </div>
      </div>

      <div className="col--2">
        <Route path={AppRoute.auth.signIn}>
          <div className="form--container">
            <header>
              <h2>Login</h2>
              <h1>Welcome back!</h1>
            </header>
            <form name="auth--form" onSubmit={handleSubmit} noValidate>
              <LoginForm {...{ handleInput, formData }} />
            </form>
          </div>
        </Route>

        <Route path={AppRoute.auth.signUp}>
          <>
            <h1 className="u--typo--title" style={{ marginTop: '20%' }}>
              Create account
            </h1>
            <form
              name="auth--form"
              style={{ marginBottom: '2em' }}
              onSubmit={handleSubmit}
              noValidate
            >
              <SignUpForm {...{ handleInput, formData }} />
            </form>
          </>
        </Route>

        <Route path={AppRoute.auth.forgotPassword}>
          <>
            <h1 className="u--typo--title" style={{ marginTop: '20%' }}>
              Forgot Password
            </h1>
            <form
              name="auth--form"
              style={{ marginBottom: '2em' }}
              onSubmit={handleSubmit}
              noValidate
            >
              <SignUpForm {...{ handleInput, formData }} />
            </form>
          </>
        </Route>
      </div>
    </Container>
  )
}

export default Auth
