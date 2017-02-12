import React, { Component } from 'react'
import { connect } from 'react-redux'

import Product from './product'

class ProductList extends Component {

  constructor(props) {
    super(props)

    this.state = {products: this.props.products}
    // this.addToCart = this.addToCart.bind(this)

    }

  renderProducts(products) {
    var list = products.map(function(product, index) {


      //this is an array of product objects
       return (
         <ul ><Product id={index} keyword={product.keyword} price={product.price} image_url={product.image_url} /></ul>
        // <ul id={index}>
        //   <li>{index}</li>
        //   <li>{product.keyword}</li>
        //   <li>${product.price}</li>
        //   <img src={product.image_url} />
        //   <li><input onSubmit={addToCart()} type="submit"></input></li>
        // </ul>
      )
    })

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

function mapStateToProps({products}) {
  return {products};
}

export default connect(mapStateToProps)(ProductList)
