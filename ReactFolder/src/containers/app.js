

import React, { Component } from 'react';
import SearchBar from '../components/search_bar'
import Columns from './columns'

// URL = "http://api.prosperent.com/api/search"
//   // prosperant public key
// API_KEY = "833625feb0218c764640681d15327431"

// sample = "http://api.prosperent.com/api/search?query=mens+running+shoes&api_key=833625feb0218c764640681d15327431"

// def self.search_request(search)
//   if search.include?(" ")
//     search = search.split(" ").join("+")
//   end
// "http://api.prosperent.com/api/search?query=#{search}&api_key=833625feb0218c764640681d15327431&location=http%3A%2F%2Flocalhost%2F3000")
//   parsed_result = JSON.parse(result)["data"]
//
//   parsed_result.map do |item|
//     item["price"]
//   end
// end

export default class App extends Component {
  constructor(props) {
    super(props)

    this.state = { products: ""}
    //should "term" be "products?"

    //search function will most likely go here, so that whenever App loads,
      //content will appear in the stores based off the default search or whatever
      //filler content I include

      // this.setState({ products })


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
