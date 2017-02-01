import React, { Component } from 'react'

import Product from '../components/product'

export default class Cart extends Component {
  render() {
    return (
        <div className="col s4">
          This is your cart
          <Product />
        </div>
    )
  }
}
