import React, { Component } from 'react'
import { connect } from 'react-redux'

// import Columns from './columns'
import ProductList from './product_list'
import Cart from './cart'
import SearchBar from '../components/search_bar'


export default class Profile extends Component {
  render() {
    return (

      <div className="row">
      <SearchBar />
      <Cart />
      <ProductList />
      </div>
    )
  }
}
