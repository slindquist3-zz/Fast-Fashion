import React, { Component } from 'react'
import { connect } from 'react-redux'

import Product from './product'

class ProductList extends Component {



//no need to have state in constructor. This is a react state. With redux you can access state through this.props

renderProducts(products) {

    // var list = products.map(function(product) {
    //   //this is an array of product objects
    //   return product
    // })
    //
    // var items = list.map(function(item, index) {
    //   //this is an array of the information (keyword, price, thumbnail that I want from each product object)
    //   return <Product id={index}/>
    //
    // }
    return products.map(function(product) {
      return product.keyword
    })

  }



  // renderProducts() {
  //   let list = []
  //   for(let id = 0; id< 10; id++){
  //     list.push()
  //
  //   }
  //     return list;
  // }

  // renderProducts() {
  //   this.props.products.map(function(product, index) {
  //     return <Product id={index} />
  //   })
  // }

  render() {
    //calls the function to get the info I want over the return from the api
    return(
      //will call a class method that will create all of the individual components
        <div className="col s4 push-s4" key="results">
        {this.renderProducts()}
        </div>
    )
  }

}

function mapStateToProps({products}) {
  return {products};
}

export default connect(mapStateToProps)(ProductList)
