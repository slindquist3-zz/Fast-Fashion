// cart is 1-3
import React, { Component } from 'react'

import Product from '../components/product'

export default class Cart extends Component {
  render() {
    return (

      <div className="row">
        <div className="col s3">
          This is your cart
          <Product />
        </div>
      </div>
    )
  }
}
//columns occupy 3 - 12
