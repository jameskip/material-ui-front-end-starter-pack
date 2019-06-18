import React from 'react'
import MenuAppBar from './components/MenuAppBar'
import { Route, HashRouter } from 'react-router-dom'

export default props => (
  <HashRouter>
    <Route path='/' component={MenuAppBar} />
  </HashRouter>
)
