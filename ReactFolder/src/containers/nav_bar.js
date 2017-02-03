import React, { Component } from 'react'

export default class NavBar extends Component {

  render() {
    return (
      <ul>
        <li><a href="/">Home</a></li>
        <li><a href="/login">Login</a></li>
        <li><a href="/columns">Cart</a></li>
      </ul>
    )
  }
}
