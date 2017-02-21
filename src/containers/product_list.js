import React, { Component } from 'react'
import { connect } from 'react-redux'

import Product from './product'

class ProductList extends Component {

  constructor(props) {
    super(props)

    this.state = {products: this.props.products,
                  cart_id: this.props.cart_id}

    this.renderProducts = this.renderProducts.bind(this)
  }

  renderProducts(products) {
    var list = products.map((product, index) => {
       return (
         <ul ><Product id={index}
                      keyword={product.keyword}
                      price={product.price}
                      image_url={product.image_url}
                      cart_id={this.props.cart_id.cart_id}/>
         </ul>
      )
    })
    return (
        <div>{list}</div>
    )
  }

  render() {

    return(
        <div className="col s6">
            <h4><strong>Product List</strong></h4>
          {this.props.products.map(this.renderProducts)}
        </div>
    )
  }
}

function mapStateToProps({products, cart_id}) {
  return {products,
          cart_id};
}

export default connect(mapStateToProps)(ProductList)
