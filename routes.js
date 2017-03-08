import React from 'react'
import {Route, IndexRoute} from 'react-router'

import App from './src/components/app'
import SearchBar from './src/components/search_bar'
import Welcome from './src/components/welcome'
import Profile from '.src/components/profile'


export default (
    <Route path="/" component={App}>
      <IndexRoute component={Welcome} />
      <Route path='/profile' component={Profile} />
      <Route path="/search" component={SearchBar} />
    </Route>
)
