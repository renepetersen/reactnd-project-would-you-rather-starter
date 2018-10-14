import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import QuestionResults from '../components/QuestionResults'
import QuestionVote from '../components/QuestionVote'
import { formatQuestion } from '../utils/helpers'

class QuestionPage extends Component {
	render() {
		const { id, question } = this.props 
		const { hasVoted } = question

		return (
			<Fragment>
				{hasVoted === true
				? <QuestionResults id={id} />
				: <QuestionVote id={id} />
				}
			</Fragment>
		)
	}
}

function mapStateToProps ({ authedUser, questions, users }, props) {
	const { id } = props.match.params
	const question = questions[id]
	const authedUserAnswers = users[authedUser].answers

	return {
		id,
		question: question
			? formatQuestion(question, users[question.author], authedUserAnswers)
			: null
	}
}

export default connect(mapStateToProps)(QuestionPage)