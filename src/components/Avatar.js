import React, { Component } from 'react'

class Avatar extends Component {
	render() {
		const { avatarURL, name } = this.props.user

		return (
			<div className='avatar'>
				<img
					src={avatarURL}
					alt={`Avatar of ${name}`}
				/>
			</div>
		)
	}
}

export default Avatar