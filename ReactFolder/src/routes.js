import React from 'react'
import { Router, Route, hashHistory, IndexRoute, browserHistory } from 'react-router'

import App from './containers/app'
import SignUp from './components/sign_up'
import SearchBar from './components/search_bar'
import Columns from './containers/columns'
import Login from './components/login'
// import Cart from

export default (
    <Route path="/" component={App}>
      <IndexRoute component={SignUp} />
      <Route path="/login" component={Login} />
      <Route path="/search" component={SearchBar} />
      <Route path="/columns" component={Columns} />
    </Route>
)
