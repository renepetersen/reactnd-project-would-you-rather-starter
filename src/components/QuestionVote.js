import React, { Component } from 'react'
import { connect } from 'react-redux'
import { formatQuestion } from '../utils/helpers'
import QuestionAuthor from './QuestionAuthor'
import QuestionVoteForm from './QuestionVoteForm'

class QuestionVote extends Component {
	render() {
		const { question, id } = this.props

		if (question === null) {
			return <p>This Question doesn't exists</p>
		}

		const { timestamp, optionOne, optionTwo, name, user } = question

		return (
			<div className='question'>
				<h2 className="heading">Would You Rather...</h2>
				
				<QuestionVoteForm
					id={id}
					optionOne={optionOne}
					optionTwo={optionTwo} 
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

export default connect(mapStateToProps)(QuestionVote)