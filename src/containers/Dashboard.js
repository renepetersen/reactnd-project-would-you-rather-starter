import React, { Component } from 'react'
import { connect } from 'react-redux'
import QuestionTeaser from '../components/QuestionTeaser'

class Dashboard extends Component {
	render() {
		return (
			<div>
				<h3 className='center'>answerdQuestionsIds Questions</h3>
				<ul className='dashboard-list'>
					{this.props.answerdQuestionsIds.map((id) => (
						<li key={id}>
							<QuestionTeaser id={id} />
						</li>
					))}
				</ul>

				<h3 className='center'>unanswerdQuestionsIds Questions</h3>
				<ul className='dashboard-list'>
					{this.props.unanswerdQuestionsIds.map((id) => (
						<li key={id}>
							<QuestionTeaser id={id} />
						</li>
					))}
				</ul>
			</div>
		)
	}
}

function mapStateToProps ({authedUser, users, questions}) {
	const authedUserInfo = users[authedUser]
	const answerdQids = authedUserInfo.answers
	const answerdQidsArr = Object.keys(answerdQids)
	// console.log(questions);

	const answerdQuestions = Object.keys(questions)
		.filter(key => answerdQidsArr.includes(key))
		.reduce((obj, key) => {
			obj[key] = questions[key];
			return obj;
		}, {});
	// console.log(answerdQidsArr);

	const unanswerdQuestions = Object.keys(questions)
		.filter(key => !answerdQidsArr.includes(key))
		.reduce((obj, key) => {
			obj[key] = questions[key];
			return obj;
		}, {});
	// console.log(unanswerdQuestions);

	return {
		answerdQuestionsIds: Object.keys(answerdQuestions)
			.sort((a,b) => questions[b].timestamp - questions[a].timestamp),
		unanswerdQuestionsIds: Object.keys(unanswerdQuestions)
			.sort((a,b) => questions[b].timestamp - questions[a].timestamp),
	}
}

export default connect(mapStateToProps)(Dashboard)