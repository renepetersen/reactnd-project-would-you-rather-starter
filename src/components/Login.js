import React, { Component } from 'react'
import { connect } from 'react-redux'
import { setAuthedUser } from '../actions/authedUser'
import { objectSort } from '../utils/helpers'

class Login extends Component {
	handleLogin = (user) => {
		const { dispatch } = this.props
		
		dispatch(setAuthedUser(user))
	}

	render() {
		const { users } = this.props

		return (
			<div className="login">
				<h1>Would You Rather...</h1>
				<h2>Login</h2>

				{Object.keys(users).length > 0 && (
					<div className="user-changer">
						<select 
							defaultValue={'choose'} 
							onChange={(event) => this.handleLogin(event.target.value)}
						>
							<option value="choose" disabled>Choose user</option>
							
							{Object.keys(users).map((user) => 
								<option key={users[user].id} value={users[user].id}>{users[user].name}</option>
							)}
						</select>
					</div>
				)}
			</div>
		)
	}
}

function mapStateToProps ({authedUser, users}) {
	Object.keys(users).length > 0 && (
		users = objectSort(users)
	)

	return {
		authedUser,
		users : users
	}
}

export default connect(mapStateToProps)(Login)