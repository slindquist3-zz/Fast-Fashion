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
        {/* <NavBar/> */}
        {/* <h1 className="customTitle color">
          <a className="logoColorD">D</a>
          <a className="logoColorA">a</a>
          <a className="logoColorR">r</a>
          <a className="logoColorL">l</a>
          <a className="logoColorI">i</a>
          <a className="logoColorN">n</a>
          <a className="logoColorG">g</a>
          <a className="logoColorEl1">.</a>
          <a className="logoColorEl2">.</a>
          <a className="logoColorEl3">.</a>
        </h1> */}
        {this.props.children}
      </div>
    );
  }
}
