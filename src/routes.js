import React from 'react'
import {Route, IndexRoute} from 'react-router'

import App from './components/app'
import SearchBar from './components/search_bar'
import Welcome from './components/welcome'
import Profile from './components/profile'


export default (
    <Route path="/" component={App}>
      <IndexRoute component={Welcome} />
      <Route path='/profile' component={Profile} />
      <Route path="/search" component={SearchBar} />
    </Route>
)
