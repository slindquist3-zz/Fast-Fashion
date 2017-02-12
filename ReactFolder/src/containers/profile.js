import React, { Component } from 'react'
import { connect } from 'react-redux'

// import Columns from './columns'
import PriceColumn from './price_column'
import Cart from './cart'
import SearchBar from '../components/search_bar'


export default class Profile extends Component {
  render() {
    return (

      <div className="row">
      <SearchBar />
      <Cart />
      <PriceColumn />
      </div>
    )
  }
}
