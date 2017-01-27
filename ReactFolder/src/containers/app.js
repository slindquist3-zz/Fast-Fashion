import React, { Component } from 'react';
import SearchBar from '../components/search_bar'
import Columns from './columns'


export default class App extends Component {
  constructor(props) {
    super(props)

    this.state = { products: ""}
  }

  render() {
    return (
      <div>
        <SearchBar />
        <Columns products= {this.state.products}/>
      </div>
    );
  }
}
