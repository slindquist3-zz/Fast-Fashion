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
        <h1 className="customTitle color">Darling<a className="logoElipses1">.</a><a className="logoElipses2">.</a><a className="logoElipses3">.</a></h1>
        {this.props.children}
      </div>
    );
  }
}
