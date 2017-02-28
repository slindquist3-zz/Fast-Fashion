import React, {Component} from 'react';

export default class Checkout extends Component {
  render() {
    return(
      <div className="row">
        <div className="col s12">
        <h4 className="center"><strong>Sorry! Checking out isn't available.</strong></h4>
          <h5 className="center">(This is just a portfolio piece!)</h5>
            <h6 className="center">But... if you enjoyed your user experience,
          check out what the creator's up to over <a href="https://scott-lindquist.com">here!</a>
        </h6>
      </div>
    </div>
    )
  }
}
