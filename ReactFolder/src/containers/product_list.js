import React, { Component } from 'react'
import { connect } from 'react-redux'

import Product from './product'

class ProductList extends Component {

//   constructor(props) {
//     super(props)
//     this.state = {products: this.props.products}
// //no need to have state in constructor. This is a react state. With redux you can access state through this.props
//     }

  renderProducts() {
    let list = []
    for(let id = 0; id<this.props.products.length; i++){
      list.push(<Product id={id}/>)
    }

    return list;
  }

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
