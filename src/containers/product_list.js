import React, { Component } from 'react'
import { connect } from 'react-redux'

// import Product from './product'

class ProductList extends Component {

  constructor(props) {
    super(props)

    this.state = {products: this.props.products}

  }

  // renderProducts(products) {
  //   var list = products.map((product, index) => {
  //      return (
  //        <ul ><Product id={index}
  //                     keyword={product.keyword}
  //                     price={product.price}
  //                     image_url={product.image_url}
  //                     cart_id={this.props.cart_id.cart_id}/>
  //        </ul>
  //     )
  //   })
  //   return (
  //       <div>{list}</div>
    //

  render() {

    return(
        <div className="col s6">
            <h4><strong>Products</strong></h4>
          {/* {this.props.products.map(this.renderProducts)} */}
        </div>
    )
  }
}

function mapStateToProps({products}) {
  return {products};
}

export default connect(mapStateToProps)(ProductList)
