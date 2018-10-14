import React, { Component } from 'react'
import Avatar from './Avatar'
import { formatLeaderboardUser } from '../utils/helpers'

class LeaderBoardCard extends Component {
	render() {
		const { id, name, avatarURL, totalanswers, totalquestions} = this.props

		const fuser = formatLeaderboardUser(id, name, avatarURL, totalanswers, totalquestions)

		return (
			<div className='leaderboard-card'>
				<Avatar user={fuser.userAvatar} />

				{fuser.id} - 
				{fuser.name} - 
				{fuser.totalAnswers} - 
				{fuser.totalQuestions} -
				{fuser.totalScore}
			</div>
		)
	}
}

export default LeaderBoardCard