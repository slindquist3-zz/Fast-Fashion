import React, { Component } from 'react';
import {connect} from 'react-redux'
import { loginUser } from '../actions/sessionActions'
import { bindActionCreators } from 'redux'
import { browserHistory, Router, Route, IndexRoute } from 'react-router'

// import InventoryList from './InventoryList'



class Login extends Component {
  // debugger
  constructor(props) {
    super(props)

    this.state = {credentials: {email: '', password: ''}}

    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(event) {
    const field = event.target.name;
    const credentials = this.state.credentials;
    credentials[field] = event.target.value;
    return this.setState({credentials: credentials});
  }


  handleSubmit(event) {
    event.preventDefault();
    this.props.loginUser(this.state.credentials);
  }

  render() {
    return (
      <form  onSubmit={this.handleSubmit} >
        <label>Email</label>
        <input type="text" value={this.state.credentials.email} onChange={this.handleChange.bind(this)} name="email" /><br />
        <label>Password</label>
        <input type="text" value={this.state.credentials.password} onChange={this.handleChange.bind(this)} name="password"/><br />
        <input type="submit" />
      </form>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators( {loginUser}, dispatch)
}

export default connect(null, mapDispatchToProps)(Login)
