import React, { Component } from 'react';
import NavBar from './nav_bar'


export default class App extends Component {
  constructor(props) {
    super(props)

    this.state = { products: ""}
  }

  render() {
    return (
      <div>
        <NavBar/>
        <h1 className="customTitle color">Darling...</h1>
        {this.props.children}
      </div>
    );
  }
}
