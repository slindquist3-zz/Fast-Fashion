import React from 'react'
import { Router, Route, hashHistory, IndexRoute, browserHistory } from 'react-router'

import App from './components/app'
import SearchBar from './components/search_bar'
import SearchResults from './components/search_results'
import Welcome from './components/welcome'
import Profile from './components/profile'


export default (
    <Route path="/" component={App}>
      <IndexRoute component={Welcome} />
      <Route path='/profile' component={Profile} />
      <Route path="/search" component={SearchBar} />
      <Route path="/search_results" component={SearchResults} />
    </Route>
)
