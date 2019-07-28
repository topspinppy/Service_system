import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { Login, Dashboard } from '../pages'

const Routes = () => (
  <Router>
    <Switch>
      <Route exact path="/" component={Login} />
      <Route path="/dashboard" component={Dashboard} />
    </Switch>
  </Router>
)

export default Routes
