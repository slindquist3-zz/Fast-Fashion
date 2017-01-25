import React, {Component} from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { fetchProducts } from '../actions/index'

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
  }

  render() {
    return (
      <div className="row">
         <form onSubmit={this.onFormSubmit}>
           <div className="col s10">
             <input
               placeholder="What are you looking for?"
               value = {this.state.search}
               onChange = {this.onInputChange} />
           </div>
           <div className="col s2">
             <input type="submit"/>
           </div>
         </form>
       </div>
    )
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators( {fetchProducts}, dispatch)
}

export default connect(null, mapDispatchToProps)(SearchBar)
