import React, { Component } from 'react'

export default class NavBar extends Component {

  render() {
        return (
          <div className="float-button">
            <div className="float-button fixed-action-btn click-to-toggle">
             <a className="float-button btn-floating btn-large black waves-effect waves-light btn">
               <i className="large material-icons">menu</i>
             </a>
             <ul>
               <li><a href="/" className="btn-floating black"><i className="material-icons">home</i></a></li>
               <li><a href="/login" className="btn-floating black"><i className="material-icons">vpn_key</i></a></li>
               <li><a href="/search" className="btn-floating black"><i className="material-icons">shopping_cart</i></a></li>
             </ul>
           </div>
          </div>
    )
  }
}
