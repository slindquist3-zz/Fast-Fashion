import React, { Component } from 'react'
// import { createProduct } from '../actions/addProduct'
// import { connect } from 'react-redux'
// import { bindActionCreators } from 'redux'


export default class Product extends Component {


  //this container will render each of the individual items that result from search
  render(){
    return(
      //we will need to change 'item' for this.props.products.(id).'blank'
      <div>
        <li>{this.props.keyword}</li>
        <li>${this.props.price}</li>
        <img src={this.props.image_url} />
        <li>{this.props.id}</li>
        <li><input type="submit" onClick={this.addToCart.bind(this)}></input></li>
      </div>
    )
  }


  addToCart(event){
    event.preventDefault();
    alert("I was pressed");
    // this.props.createProduct(this.state.search);
    //class method with action imported from action folder that will allow the item to be stored in a cart state
  }

}

// function mapDispatchToProps(dispatch) {
//   return bindActionCreators( {createProduct}, dispatch)
// }
//
// export default connect(null, mapDispatchToProps)(Product)
