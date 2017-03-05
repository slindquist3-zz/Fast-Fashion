import React, {Component} from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { fetchProducts } from '../actions/fetchProducts'
import { browserHistory, Router, Route, IndexRoute } from 'react-router'


class SearchBar extends Component {

  constructor(props) {
    super(props)

    this.state = {search: ""}

    this.onInputChange = this.onInputChange.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
  }

  onInputChange(event) {
    this.setState( {search: event.target.value} )
  }

  onFormSubmit(event) {
    event.preventDefault();

    this.props.fetchProducts(this.state.search);
    this.setState({ search: "" });
    browserHistory.push('/profile/:id')
  }

  render() {
    return (
      <div className="center">
           <form onSubmit={this.onFormSubmit}>
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

function mapDispatchToProps(dispatch) {
  return bindActionCreators( {fetchProducts}, dispatch)
}

export default connect(null, mapDispatchToProps)(SearchBar)
