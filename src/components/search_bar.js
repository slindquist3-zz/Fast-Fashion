import React, {Component} from 'react';
// import { browserHistory, Router, Route, IndexRoute } from 'react-router'

export default class SearchBar extends Component {

  constructor(props) {
    super(props);

    this.state = {term: ""}

    this.onInputChange = this.onInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  onInputChange(term) {
    this.setState({term})
  }

  handleSubmit(event) {
    event.preventDefault()
    this.props.productSearch(this.state.term)
  }

  render() {
    return (

      <div className="center">
             <form onSubmit={this.handleSubmit}>
               <input className="searchPageInput"
                 placeholder="What are you looking for?"
                 value={this.state.term}
                 onChange={event => this.onInputChange(event.target.value)} />
                <p><a className="ghost-search-button" alt="Submit" href="/profile">SEARCH</a></p>
           </form>
       </div>

    )
  };
}
