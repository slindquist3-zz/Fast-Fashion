import React, { Component } from 'react'
import SearchResults from './search_results'
import SearchBar from '../components/search_bar'

export default class Profile extends Component {

constructor(props) {
    super(props)
    this.state = {urls: []};
  }

 renderIframes(term) {
    if (term.includes(" ")) {
      var query = term.split(" ").join("+")
    } else {
      query = term;
    }
    var handm = `https://www.hm.com/us/products/search?q=${query}`;
    var uniglo = `https://www.uniqlo.com/us/en/search/?q=${query}&lang=default`;
    var express = `http://www.express.com/exp/search?q=${query}`;

    this.setState({urls: [handm, express, uniglo]})
  }


  render() {
    debugger
    return (

      <div>
      <SearchBar productSearch={term => this.renderIframes(term)}/>
        <div className="underSearchBar">
          <div className="here">
              <SearchResults urls={this.state.urls}/>
          </div>
          </div>
        </div>
    )
  }
}
