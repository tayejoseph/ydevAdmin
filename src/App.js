import React, { useEffect } from 'react'
import { Switch, Route, useLocation } from 'react-router-dom'
import { IconContext } from 'react-icons'
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
  let background = location.state && location.state.background

  return (
    <ThemeProvider theme={{ ...theme() }}>
      <GlobalStyle />
      <IconContext.Provider value={{ className: 'icon' }}>
        <div className="app--content">
          <Switch location={background || location}>
            <Route path={AppRoute.auth.initial} component={Auth} />
            <Route path={AppRoute.dashboard.initial} component={Dashboard} />
          </Switch>
        </div>
        <ScrollToTop />
      </IconContext.Provider>
    </ThemeProvider>
  )
}

export default App
