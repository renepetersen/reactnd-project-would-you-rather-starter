import React, { Component } from 'react'
import { connect } from 'react-redux'
import LeaderBoardCard from '../components/LeaderBoardCard'

class Leaderboard extends Component {
	render() {
		const { usersSorted } = this.props
	
		return (
			<div>
				<h3 className='center'>Leaderboard</h3>

				<ul className='dashboard-list'>

					{/* {usersSortedKeys.map((useritem) => */}
					{Object.keys(usersSorted).map((useritem) =>
						<li key={useritem}>
							<LeaderBoardCard 
								id={usersSorted[useritem].id} 
								name={usersSorted[useritem].name}
								avatarURL={usersSorted[useritem].avatarURL}
								totalanswers={usersSorted[useritem].totalAnswers}
								totalquestions={usersSorted[useritem].totalQuestions}
							/>
						</li>
					)}

				</ul>
			</div>
		)
	}
}

function mapStateToProps ({users}) {

	//Add new object properties 'totalAnswers and totalQuestions' to userObject.
	Object.keys(users).map((item) => {
		users[item].totalAnswers = Object.keys(users[item].answers).length
		users[item].totalQuestions = users[item].questions.length
	})
	
	//Sort Object
	const usersArray = Object.keys(users)
		.map(item => users[item])
		.sort((a, b) => (a.totalAnswers + a.totalQuestions) - (b.totalAnswers + b.totalQuestions))
		.reverse()


// .filter( person => person.age >= 21 )

	return {
		usersSorted: usersArray,
		users
	}
}

export default connect(mapStateToProps)(Leaderboard)