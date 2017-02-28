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
        <h1 className="customTitle color">Darling<a className="teal lighten-2">.</a><a className="teal lighten-3">.</a><a className="teal lighten-3">.</a></h1>
        {this.props.children}
      </div>
    );
  }
}
