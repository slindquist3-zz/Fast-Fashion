import React, { Component } from 'react'
import { connect } from 'react-redux'

class PriceColumn extends Component {

  renderProducts(products) {

    var list = products.data.map(function(product) {
      return product.keyword
    })

    var items = list.map(function(item) {
      return (
        <ul>
          <li>
            {item}
          </li>
        </ul>
      )
    })
    console.log(items)

    return (
        <div>{items}</div>

    )
  }

  render() {
    return(
      <div className="row">
        <div className="col s4 push-s4">
        lower-priced products
          {this.props.products.map(this.renderProducts)}
        </div>
      </div>
    )
  }

}


function mapStateToProps({products}) {
  return {products};
}

export default connect(mapStateToProps)(PriceColumn)
