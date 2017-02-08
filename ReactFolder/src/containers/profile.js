import React, { Component } from 'react'
import { connect } from 'react-redux'

import Columns from './columns'

class Profile extends Component {
  render() {
    return (

      <div className="row">
          <Columns />
      </div>
    )
  }
}

function mapStateToProps(state, myProps) {
  return { state: state }
}

export default connect(mapStateToProps)(Profile)
