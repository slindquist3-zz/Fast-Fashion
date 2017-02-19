import React, { Component } from 'react'
import { addProduct } from '../actions/addProduct'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'


class Product extends Component {


  //this container will render each of the individual items that result from search
  render(){

    return(
      //we will need to change 'item' for this.props.products.(id).'blank'
      <div>
        <p className="productProps"><strong>{this.props.keyword}</strong></p>
        <img className="imageCenter productProps" src={this.props.image_url} />
        <p className="productProps"><strong>${this.props.price}</strong></p>
        <p className="productPropsBottom"><a onClick={this.addToCart.bind(this)} className="customButton waves-effect waves-light btn">Add to Cart</a></p>
      </div>

    )
  }


  addToCart(event){
    event.preventDefault();
    const product = {product: {name: this.props.keyword, thumbnail: this.props.image_url, price: this.props.price, cart_id: this.props.cart_id}}
    this.props.addProduct(product);

    //class method with action imported from action folder that will allow the item to be stored in a cart state
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
