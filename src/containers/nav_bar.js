import React, { Component } from 'react'
import { Link } from 'react-router'

export default class NavBar extends Component {

  render() {
        return (
          <div className="float-button">
            <div className="float-button fixed-action-btn click-to-toggle">
             <a className="float-button btn-floating btn-large white waves-effect waves-light btn">
               <i className="hover-er large material-icons">menu</i>
             </a>
             <ul>
               <li><Link href="/" className="btn-floating teal accent-4"><i className="material-icons">home</i></Link></li>
               <li><Link href="/search" className="btn-floating teal accent-4"><i className="material-icons">search</i></Link></li>
             </ul>
           </div>
          </div>
    )
  }
}
