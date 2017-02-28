import React, {Component} from 'react';

export default class Checkout extends Component {
  render() {
    return(
      <div className="row">
        <div className="col s12">
        <h3 className="center"><strong>Sorry! Checking out isn't available.</strong></h3>
          <h5 className="center">(This is just a portfolio piece, and I don't have the security to handle your real money.)</h5>
          <div className="row">
            <h5 className="center">But if you like what you saw, you can see more by clicking the button below.</h5>

            <div className="col s10 offset-s1">
            <h5 className="center"> <a href="https://scott-lindquist.com" className="checkoutButton waves-effect waves-light btn">Check out my full website here!</a>
            </h5>
          </div>
        </div>
      </div>
    </div>
    )
  }
}
