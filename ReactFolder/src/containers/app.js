import React, { Component } from 'react';
import SearchBar from '../components/search_bar'
import Columns from './columns'
import SignUp from '../components/sign_up'


export default class App extends Component {
  constructor(props) {
    super(props)

    this.state = { products: ""}
  }

  render() {
    return (
      <div>
        {/* <Columns products= {this.state.products}/> */}
        {this.props.children}
      </div>
    );
  }
}
