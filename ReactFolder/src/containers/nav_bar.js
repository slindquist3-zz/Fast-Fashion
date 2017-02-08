import React, { Component } from 'react'

export default class NavBar extends Component {

  render() {
    return (
    <div className="row blackBackground">
      <div className="col s6 offset-s2">
        <ul>
        <li><a href="/"><img className="homeIcon" src="../../images/home.png"/></a></li>
        <li><a href="/login"><img className="loginIcon" src="../../images/key.png"/></a></li>
        <li><a href="/search"><img className="cartIcon" src="../../images/cart.png"/></a></li>
      </ul>
      </div>
    </div>
    )
  }
}
