import React, { Component } from 'react'
import { connect } from 'react-redux'

import Product from './product'

class ProductList extends Component {

  constructor(props) {
    super(props)

    this.state = {products: this.props.products,
                  cart_id: this.props.cart}

    this.renderProducts = this.renderProducts.bind(this)

    }

  renderProducts(products) {
    var list = products.map((product, index) => {
       return (
         <ul ><Product id={index} keyword={product.keyword} price={product.price} image_url={product.image_url} cart_id={this.props.cart.cart_id}/></ul>
      )
    })
//how to get cart set in state
    return (
      //returns the desired info
        <div>{list}</div>
    )
  }
    //
    // addToCart(event) {
    //   event.preventDefault()
    //   console.log("I was pressed")
    // }

  render() {
    //calls the function to get the info I want over the return from the api
    return(

        <div className="col s4 push-s4">
        lower-priced products
          {this.props.products.map(this.renderProducts)}
        </div>
    )
  }
}

function mapStateToProps({products, cart}) {
  return {products,
          cart};
}

export default connect(mapStateToProps)(ProductList)
