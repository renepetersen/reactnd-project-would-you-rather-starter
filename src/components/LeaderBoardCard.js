import React, { Component } from 'react'
import Avatar from './Avatar'
import { formatLeaderboardUser } from '../utils/helpers'

class LeaderBoardCard extends Component {
	render() {
		const { id, name, avatarURL, totalanswers, totalquestions} = this.props

		const fuser = formatLeaderboardUser(id, name, avatarURL, totalanswers, totalquestions)

		return (
			<div className='leaderboard-card'>
				<div className='heading'>
					{fuser.name}
				</div>
				<div className='col-1'>
					<Avatar user={fuser.userAvatar} />
				</div>
				<div className='col-2'>
					<div className='total-answers'><span>Answerd questions:</span> {fuser.totalAnswers}</div>
					<div className='total-questions'><span>Created questions:</span>{fuser.totalQuestions}</div>
				</div>
				<div className='col-3'>
					<div className='total-score'>
						<span>Score</span>
						<span className='scorenr'>{fuser.totalScore}</span>
					</div>
				</div>
			</div>
		)
	}
}

export default LeaderBoardCard