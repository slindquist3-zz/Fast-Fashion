import React, { Component } from 'react'

import PriceColumn from './price_column'
import Cart from './cart'

export default class Columns extends Component {
  render() {
    return (

      <div className="row">
          <div className="col s9 push-s3"><span className="flow-text">This div is where the store columns go. All the way to here.</span></div>
          <div className="col s3 pull-s9"><span className="flow-text">This div is where the cart column goes.</span></div>
          <Cart />
          <PriceColumn />
        </div>
    )
  }
}
//columns occupy 3 - 12
