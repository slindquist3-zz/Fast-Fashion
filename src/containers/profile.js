import React, { Component } from 'react'
import { connect } from 'react-redux'
import ProductList from './product_list'
import SearchBar from '../components/search_bar'


export default class Profile extends Component {
  render() {
    return (

      <div className="row">
      <SearchBar />
        <div className="underSearchBar">
          <div className="row">
          <ProductList/>
          </div>
        </div>
      </div>
    )
  }
}
