import React from 'react'
import CssBaseline from '@material-ui/core/CssBaseline'
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles'

import Routes from './routes'
import logo from './logo.svg'
import './App.css'

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#38a3dc'
    },
    secondary: {
      main: '#f44336'
    },
    background: {
      default: '#F6F8FA'
    }
  }
})

const App = () => {
  return (
    <MuiThemeProvider theme={theme}>
      <div className="App">
        <CssBaseline />
        <Routes />
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
          Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
          Learn React
          </a>
        </header>
      </div>
    </MuiThemeProvider>
  )
}

export default App
