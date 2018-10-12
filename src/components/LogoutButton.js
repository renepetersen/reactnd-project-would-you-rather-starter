import React, { Component } from 'react'
import { connect } from 'react-redux'
import { setAuthedUser } from '../actions/authedUser'
import { withRouter } from 'react-router-dom'

class LogoutButton extends Component {
	handleLogout = (e) => {
		e.preventDefault()

		this.props.dispatch(setAuthedUser(null))
		this.props.history.push(`/`)
	}

	render() {
		return (
			<button className='logoutbutton' onClick={this.handleLogout}>Logout</button>
		)
	}
}

export default withRouter(connect()(LogoutButton))