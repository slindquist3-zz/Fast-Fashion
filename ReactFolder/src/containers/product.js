import React, { Component } from 'react'
import { createProduct } from '../actions/addProduct'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'


class Product extends Component {


  //this container will render each of the individual items that result from search
  render(){
    return(
      //we will need to change 'item' for this.props.products.(id).'blank'
      <div>
        <li className="productProps"><strong>{this.props.keyword}</strong></li>
        <img className="imageCenter productProps" src={this.props.image_url} />
        <li className="productProps"><strong>${this.props.price}</strong></li>
        <li className="productPropsBottom"><a onClick={this.addToCart.bind(this)} className="customButton waves-effect waves-light btn">Add to Cart</a></li>
      </div>
    )
  }


  addToCart(event){
    event.preventDefault();
    debugger
    const product = {product: {name: this.props.keyword, thumbnail: this.props.image_url, price: this.props.price, cart_id: this.props.cart_id}}
    this.props.createProduct(product);
    //class method with action imported from action folder that will allow the item to be stored in a cart state
  }

}

function mapDispatchToProps(dispatch) {
  return bindActionCreators( {createProduct}, dispatch)
}

export default connect(null, mapDispatchToProps)(Product)
