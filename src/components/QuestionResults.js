import React, { Component } from 'react'
import { connect } from 'react-redux'
import { formatQuestion } from '../utils/helpers'
import QuestionAnswers from './QuestionAnswers'
import QuestionAuthor from './QuestionAuthor'

class QuestionResults extends Component {
	render() {
		const { question } = this.props

		if (question === null) {
			return <p>This Question doesn't exists</p>
		}

		const { id, timestamp, optionOne, optionTwo, name, user, totalVotes, authedUserQuestionAnswer } = question

		return (
			<div className='question'>
				<h2 className="heading">Would You Rather...</h2>

				<QuestionAnswers 
					optionOne={optionOne}
					optionTwo={optionTwo} 
					totalVotes={totalVotes} 
					authedUserQuestionAnswer={authedUserQuestionAnswer} 
				/>

				<h3 className="heading-sub">Question asked by:</h3>
				
				<QuestionAuthor 
					user={user}
					name={name}
					timestamp={timestamp}
				/>

				<span className='question-id'>{id}</span>
			</div>
		)
	}
}

function mapStateToProps ({authedUser, users, questions}, {id}) {
	const question = questions[id]
	const authedUserAnswers = users[authedUser].answers

	return {
		question: question
			? formatQuestion(question, users[question.author], authedUserAnswers)
			: null
	}
}

export default connect(mapStateToProps)(QuestionResults)