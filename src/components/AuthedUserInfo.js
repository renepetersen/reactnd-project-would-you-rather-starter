import React, { Component } from 'react'
import { connect } from 'react-redux'
import Avatar from './Avatar'

class AuthedUserInfo extends Component {
	render() {
		const { userInfo } = this.props

		if (userInfo === null) {
			return <p>This User doesn't exists</p>
		}

		const { name } = userInfo

		return (
			<div className="authed-user-info">
				<Avatar user={userInfo} />
				{ name }
			</div>
		)
	}
}

function mapStateToProps ({authedUser, users}) {
	const userInfo = users[authedUser]

	return {
		userInfo: userInfo
	}
}

export default connect(mapStateToProps)(AuthedUserInfo)