import React, { Component } from 'react';
import { connect } from 'react-redux'
import { signUpUser } from '../actions/sessionActions'
import { bindActionCreators } from 'redux'
import { browserHistory, Router, Route, IndexRoute } from 'react-router'

// import InventoryList from './InventoryList'



class SignUp extends Component {
  // debugger
  constructor(props) {
    super(props)

    this.state = {credentials: {name: "", email: "", password: ""}}

    this.handleClick = this.handleClick.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }

  handleClick(event) {
    event.preventDefault()
    this.props.signUpUser(this.state.credentials)
    this.setState({credentials: {name: "", email: "", password: ""}})
  }

    handleChange(event) {

      //why is field undefined?
      const field = event.target.name;
      const credentials = this.state.credentials;
      credentials[field] = event.target.value;
      return this.setState({credentials: credentials});
    }

  render() {
    return (
    <form className="col s12" onSubmit={this.handleClick}>
      <div className="row">
        <div className="input-field col s3 offset-s1">
          <label>Name</label>
          <input type="text" value={this.state.credentials.name} onChange={this.handleChange.bind(this)} name="name" /><br />
        </div>
        <div className="input-field col s3">
          <label>Email</label>
          <input type="text" value={this.state.credentials.email} onChange={this.handleChange.bind(this)} name="email"/><br />
        </div>
        <div className="input-field col s3">
          <label>Password</label>
          <input type="text" value={this.state.credentials.password} onChange={this.handleChange.bind(this)} name="password"/><br />
        </div>
        <div className="input-field col s1">
          <button className="ghost" type="submit" name="action">Submit
          </button>
        </div>
      </div>
    </form>

    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators( {signUpUser}, dispatch)
}

export default connect(null, mapDispatchToProps)(SignUp)
