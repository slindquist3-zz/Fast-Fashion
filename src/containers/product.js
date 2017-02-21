import React, { Component } from 'react'
import { addProduct } from '../actions/addProduct'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'


class Product extends Component {

  render(){

    return(
      <div>
        <p className="productProps"><strong>{this.props.keyword}</strong></p>
        <img className="imageCenter productProps" src={this.props.image_url} />
        <p className="productProps"><strong>${this.props.price}</strong></p>
        <p className="productPropsBottom"><a onClick={this.addToCart.bind(this)}
          className="customButton waves-effect waves-light btn">Add to Cart</a>
        </p>
      </div>

    )
  }


  addToCart(event){
    event.preventDefault();
    const product = {product: {name: this.props.keyword,
                              thumbnail: this.props.image_url,
                              price: this.props.price,
                              cart_id: this.props.cart_id}}

    this.props.addProduct(product);
  }

  deleteFromCart(event) {
    event.preventDefault()
    this.props.deleteProduct(product)
  }
}

function mapStateToProps({cart}) {
  return {cart};
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators( {addProduct}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Product)
