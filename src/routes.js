import React from 'react'
import { Router, Route, hashHistory, IndexRoute, browserHistory } from 'react-router'

import App from './containers/app'
import SearchBar from './components/search_bar'
import Profile from './containers/profile'
import Welcome from './containers/welcome'


export default (
    <Route path="/" component={App}>
      <IndexRoute component={Welcome} />
      <Route path="/search" component={SearchBar} />
      <Route path="/profile/:id" component={Profile} />
    </Route>
)
