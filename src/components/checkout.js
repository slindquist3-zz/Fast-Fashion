import React, {Component} from 'react';

export default class Checkout extends Component {
  render() {
    return(
      <div className="row">
        <div className="col s12">
        <h2 className="center"><strong>Sorry! Checking out isn't available.</strong></h2>
          <h4 className="center">(This is just a portfolio piece!)</h4>
            <h5 className="center">But... if you enjoyed your user experience,
              check out what the creator's up to over
              <a href="https://scott-lindquist.com" className="customButton waves-effect waves-light btn">here!</a>
            </h5>
      </div>
    </div>
    )
  }
}
