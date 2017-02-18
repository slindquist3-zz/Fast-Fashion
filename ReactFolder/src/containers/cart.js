import React, { Component } from 'react'
import { connect } from 'react-redux'
import { deleteProduct } from '../actions/deleteProduct'
import { bindActionCreators } from 'redux'



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
                <p className="productPropsBottom"><a onClick={this.deleteFromCart(product).bind(this)} className="customButton waves-effect waves-light btn">Delete</a></p>
              </div>
            )
          }.bind(this))}
        </div>
    )
  }

  deleteFromCart(event) {
    debugger
    event.preventDefault()
    this.props.deleteProduct(product)
  }

}


function mapDispatchToProps(dispatch) {
  return bindActionCreators({ deleteProduct }, dispatch)
}

function mapStateToProps({cart}) {
  return {cart};
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart)
