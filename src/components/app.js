import React, { Component } from 'react';

export default class App extends Component {
//TEST
  render() {
    return (
      <div>
        {this.props.children}
      </div>
    );
  }
}
