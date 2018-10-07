import React, { Component } from 'react'
import '../styles/App.css'
import { connect } from 'react-redux'
import { handleInitialData } from '../actions/shared'
import Dasboard from './Dashboard'
import AuthedUserInfo from './AuthedUserInfo'

class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData())
  }
  render() {
    // console.log(this.props)
    return (
      <div>
        {this.props.loading === true 
        ? null
        : <div>
            <nav>Navigation</nav>
            <AuthedUserInfo />
            <Dasboard />
          </div>
        }
      </div>
    )
  }
}

function mapStateToProps ({authedUser}) {
  return {
    loading: authedUser === null
  }
}

export default connect(mapStateToProps)(App);