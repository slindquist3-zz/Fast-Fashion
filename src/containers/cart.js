import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import CartProduct from './cart_product'

class Cart extends Component {

  renderProducts(cart) {
    let list = cart.map(function(product, index) {
       return (
         <ul><CartProduct id={index} keyword={product.name} price={product.price} image_url={product.thumbnail} /></ul>
      )
  })
  return (<div>{list}</div>)
}

  render() {
    return(
        <div className="col s6">
            <h4><strong>Cart</strong></h4>
          {this.renderProducts(this.props.cart)}
        </div>
    )
  }
}


function mapStateToProps({cart, cart_id}) {
  return {cart, cart_id};
}

export default connect(mapStateToProps)(Cart)
