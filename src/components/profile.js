import React, { Component } from 'react'
import { connect } from 'react-redux'
import SearchResults from './search_results'
import SearchBar from '../components/search_bar'


export default class Profile extends Component {
  render() {
    return (

      <div className="row">
      <SearchBar />
        <div className="underSearchBar">
          <div className="here">
              <SearchResults/>
          </div>

          </div>
        </div>
    )
  }
}
