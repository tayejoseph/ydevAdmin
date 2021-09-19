import React, { useEffect } from 'react'
import { Switch, Route, useLocation, Redirect } from 'react-router-dom'
import { IconContext } from 'react-icons'
import { useSelector } from 'react-redux'
import { ThemeProvider } from 'styled-components'
import { Auth, Dashboard } from './View'
import { AppRoute } from './constants'
import theme from './base/theme'
import GlobalStyle from './base/globalStyles'

const ScrollToTop = () => {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })
  }, [pathname])

  return null
}

const App = () => {
  const location = useLocation()
  const { authenticated } = useSelector((state) => state.userData)
  let background = location.state && location.state.background

  return (
    <ThemeProvider theme={{ ...theme() }}>
      <GlobalStyle />
      <IconContext.Provider value={{ className: 'icon' }}>
        <div className="app--content">
          <Switch location={background || location}>
            <Route path="/" exact>
              <Redirect to={AppRoute.auth.signIn} />
            </Route>
            <Route path={AppRoute.auth.initial}>
              {authenticated ? (
                <Redirect to={AppRoute.dashboard.initial} />
              ) : (
                <Auth />
              )}
            </Route>
            <Route path={AppRoute.dashboard.initial}>
              {authenticated ? (
                <Dashboard />
              ) : (
                <Redirect to={AppRoute.auth.signIn} />
              )}
            </Route>
          </Switch>
        </div>
        <ScrollToTop />
      </IconContext.Provider>
    </ThemeProvider>
  )
}

export default App
