import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import LeaderBoardCard from '../components/LeaderBoardCard'

class Leaderboard extends Component {
	render() {
		const { usersSorted, authedUser } = this.props

		return (
			<Fragment>
				<h3 className='center'>Leaderboard</h3>
				<ul className='dashboard-list'>

					{Object.keys(usersSorted).map((useritem) =>
						<li key={useritem}>
							<LeaderBoardCard 
								id={usersSorted[useritem].id} 
								name={usersSorted[useritem].name}
								avatarURL={usersSorted[useritem].avatarURL}
								totalanswers={usersSorted[useritem].totalAnswers}
								totalquestions={usersSorted[useritem].totalQuestions}
								authedUser={authedUser}
							/>
						</li>
					)}

				</ul>

				<Link to={`/`} className='go-back'>Go back</Link>

			</Fragment>
		)
	}
}

function mapStateToProps ({authedUser, users}) {

	//Add new object properties 'totalAnswers and totalQuestions' to userObject.
	Object.keys(users).forEach((item) => {
		users[item].totalAnswers = Object.keys(users[item].answers).length
		users[item].totalQuestions = users[item].questions.length
	})
	
	//Sort Object
	const usersArray = Object.keys(users)
		.map(item => users[item])
		.sort((a, b) => (a.totalAnswers + a.totalQuestions) - (b.totalAnswers + b.totalQuestions))
		.reverse()

	return {
		usersSorted: usersArray,
		authedUser
	}
}

export default connect(mapStateToProps)(Leaderboard)