import React, { Component } from 'react'
import { connect } from 'react-redux'

class Product extends Component {


  //this container will render each of the individual items that result from search
  render(){
    return(
      //we will need to change 'item' for this.props.products.(id).'blank'
      <div>
        <li>{this.props.products[this.props.id].keyword}</li>
        {/* <li>${this.props.products.price}</li>
        <img src={this.props.products.image_url} /> */}
        <li>{this.props.id}</li>
        <li><input type="submit"></input></li>
        hi
      </div>
    )
  }

  // addToCart(){
  //   //class method with action imported from action folder that will allow the item to be stored in a cart state
  // }

}

function mapStateToProps({products}) {
  return {products};
}

export default connect(mapStateToProps)(Product)
