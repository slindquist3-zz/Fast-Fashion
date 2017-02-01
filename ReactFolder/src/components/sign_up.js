import React, { Component } from 'react';
import {connect} from 'react-redux'
import { addUser } from '../actions/addUser'
import { bindActionCreators } from 'redux'
import { browserHistory, Router, Route, IndexRoute } from 'react-router'

// import InventoryList from './InventoryList'



class SignUp extends Component {
  // debugger
  constructor(props) {
    super(props)

    this.state = {name: "", email: "", password: ""}

    this.handleClick = this.handleClick.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }

  handleClick(event) {
    event.preventDefault()
    this.props.addUser(this.state.name, this.state.email, this.state.password)
    this.setState({name: "", email: "", password: ""})
    browserHistory.push('/search')  }

  handleChange(propertyName, event) {
    // debugger
    var obj = {}
    obj[propertyName] = event.target.value
    this.setState(obj)
  }

  render() {
    return (
      <form  onSubmit={this.handleClick} >
        <label>Name</label>
        <input type="text" value={this.state.name} onChange={this.handleChange.bind(this, "name")} /><br />
        <label>Email</label>
        <input type="text" value={this.state.email} onChange={this.handleChange.bind(this, "email")} /><br />
        <label>Password</label>
        <input type="text" value={this.state.password} onChange={this.handleChange.bind(this, "password")}/><br />
        <input type="submit" />
      </form>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators( {addUser}, dispatch)
}

export default connect(null, mapDispatchToProps)(SignUp)
