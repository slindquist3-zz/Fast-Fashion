import React, {Component} from 'react';
import { connect } from 'react-redux'
import { browserHistory, Router, Route, IndexRoute } from 'react-router'


export default class SearchBar extends Component {

  constructor(props) {
    super(props)

    this.state = {search: ""}

    this.onInputChange = this.onInputChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  onInputChange(event) {
    this.setState( {search: event.target.value} )
  }

  handleClick(event) {
    event.preventDefault();

    //this is wear each url will go in the iframe
    return (
      <div>
        <iframe></iframe>
        <iframe></iframe>
        <iframe></iframe>
      </div>
    )
    this.setState({ search: "" });
    // browserHistory.push('/profile/:id')
  }

  render() {
    return (
      <div className="center">
           <form onSubmit={this.handleClick}>
               <input className= "searchPageInput"
                 placeholder="What are you looking for?"
                 value = {this.state.search}
                 onChange = {this.onInputChange} />
                <p><a className="ghost-search-button" alt="Submit" href="/search">SEARCH</a></p>
           </form>
       </div>
    )
  };
}
