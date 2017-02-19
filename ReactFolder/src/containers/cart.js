import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import ProductCart from './product_cart'



class Cart extends Component {
  // render() {
  //   return (
  //     <div>
  //       <div className="col s6">
  //       <h4><strong>Your Cart</strong></h4>
  //       {this.showCartProducts()}
  //       </div>
  //     </div>
  //   )
  // }
  // showCartProducts() {
  //
  //   return (
  //     <div>
  //         {this.props.cart.map(function(product, index) {
  //           return (
  //             <div>
  //               <p className="productProps" >{product.name}</p>
  //               <img className="imageCenter productProps" src={product.thumbnail} />
  //               <p className="productProps" >{product.price}</p>
  //               <p className="productPropsBottom"><a onClick={this.deleteFromCart.bind(this)} className="customButton waves-effect waves-light btn">Delete</a></p>
  //             </div>
  //           )
  //         }.bind(this))}
  //       </div>
  //   )
  // }

  // renderProducts(cart) {
  //   debugger
  //   var list = cart.map((product, index) => {
  //
  //      return (
  //        <ul ><ProductCart id={index} keyword={product.keyword} price={product.price} image_url={product.image_url} cart_id={this.props.cart_id.cart_id}/></ul>
  //     )
  //   })
  //   return (
  //
  //       <div>{list}</div>
  //   )
  // }
  //
  // render() {
  // debugger
  //   return(
  //
  //       <div className="col s6">
  //           <h4><strong>Products</strong></h4>
  //         {this.props.cart.map(this.renderProducts)}
  //       </div>
  //   )
  // }


  renderProducts(cart) {
    let list = cart.map(function(product, index) {

       return (
         <ul><ProductCart id={index} keyword={product.name} price={product.price} image_url={product.thumbnail} /></ul>
      )
  })

  return (<div>{list}</div>)
}

  render() {
    return(

        <div className="col s6">
            <h4><strong>Cart</strong></h4>
          {this.renderProducts(this.props.cart)}
        </div>
    )
  }

    // deleteFromCart(event) {
    //
    //   event.preventDefault()
    //   this.props.deleteProduct(product)
    // }

}




// function mapDispatchToProps(dispatch) {
//   return bindActionCreators({ deleteProduct }, dispatch)
// }

function mapStateToProps({cart, cart_id}) {
  return {cart, cart_id};
}

export default connect(mapStateToProps)(Cart)

// cart_id={this.props.cart_id}
