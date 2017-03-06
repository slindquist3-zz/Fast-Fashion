import React, {Component} from 'react';
import { connect } from 'react-redux'
import { browserHistory, Router, Route, IndexRoute } from 'react-router'


export default class SearchBar extends Component {

  constructor(props) {
    super(props)

    this.state = {search: ""}

    this.onInputChange = this.onInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  onInputChange(event) {
    this.setState( {search: event.target.value} )
  }

  handleSubmit(event) {
    event.preventDefault()
    browserHistory.push("/profile")
  }

  render() {
    return (

      <div className="center">
             <form onSubmit={this.handleSubmit}>
               <input className= "searchPageInput"
                 placeholder="What are you looking for?"
                 value = {this.state.search}
                 onChange = {this.onInputChange} />
                <p><a className="ghost-search-button" alt="Submit" href="/profile">SEARCH</a></p>
           </form>
       </div>

    )
  };
}

function mapStateToProps({search}) {
  return {search};
}
