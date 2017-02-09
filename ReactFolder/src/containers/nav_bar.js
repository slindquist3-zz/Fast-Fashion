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
  //   <div className="fixed-action-btn horizontal click-to-toggle">
  //   <a className="btn-floating btn-large black">
  //     <i className="material-icons">menu</i>
  //   </a>
  //   <ul>
  //     <li><a className="btn-floating black"><i className="material-icons">insert_chart</i></a></li>
  //     <li><a className="btn-floating black"><i className="material-icons">format_quote</i></a></li>
  //     <li><a className="btn-floating black"><i className="material-icons">publish</i></a></li>
  //     <li><a href="./search" className="btn-floating black"><i className="material-icons">attach_file</i></a></li>
  //   </ul>
  // </div>
    )
  }
}
