import React, { Component } from 'react';
import SearchBar from '../components/search_bar'
import Columns from './columns'
import SignUp from '../components/sign_up'
import NavBar from './nav_bar'


export default class App extends Component {
  constructor(props) {
    super(props)

    this.state = { products: ""}
  }

  render() {
    return (
      <div>
        <NavBar />
        <h1 className="customTitle color">Darling...</h1>
        {this.props.children}
      </div>
    );
  }
}
