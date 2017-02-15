import React, { Component } from 'react'
import { connect } from 'react-redux'


class Cart extends Component {
  render() {
    return (
      <div>
        <div className="col s6">
        <h4><strong>Your Cart</strong></h4>
        {this.showCartProducts()}
        </div>
      </div>
    )
  }
  showCartProducts() {

    return (
      <div>
          {this.props.cart.map(function(product, index) {
            return (
              <div>
                <p className="productProps" >{product.name}</p>
                <img className="imageCenter productProps" src={product.thumbnail} />
                <p className="productProps" >{product.price}</p>
                <p className="productPropsBottom"><a className="customButton waves-effect waves-light btn">Delete</a></p>
              </div>
            )
          })}
        </div>
    )
  }
}

function mapStateToProps({cart}) {
  return {cart};
}

export default connect(mapStateToProps)(Cart)
