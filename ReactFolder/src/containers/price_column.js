// import React, { Component } from 'react'
// import { connect } from 'react-redux'
//
// class PriceColumn extends Component {
//
//   constructor(props) {
//     super(props)
//
//     this.state = {products: this.props.products}
//
//     }
//
//   renderProducts(products, addToCart) {
//
//     var list = products.data.map(function(product) {
//       //this is an array of product objects
//       return product
//     })
//
//     var items = list.map(function(item) {
//       //this is an array of the information (keyword, price, thumbnail that I want from each product object)
//       return (
//         <ul>
//           <li>
//             {item.keyword}
//
//           </li>
//           <li>
//             ${item.price}
//           </li>
//           <img src={item.image_url} />
//           <li>
//             <input type="submit"></input>
//           </li>
//         </ul>
//       )
//     })
//     return (
//       //returns the desired info
//         <div>{items}</div>
//     )
//   }
//
//   render() {
//     //calls the function to get the info I want over the return from the api
//     return(
//
//         <div className="col s4 push-s4" key="results">
//         lower-priced products
//           {this.props.products.map(this.renderProducts)}
//         </div>
//     )
//   }
//
// }
//
// function mapStateToProps({products}) {
//   return {products};
// }
//
// export default connect(mapStateToProps)(PriceColumn)
