import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import Avatar from './Avatar'

class QuestionTeaser extends Component {
	render() {
		const { question, questionAuthor } = this.props

		if (question === null) {
			return <p>This Question doesn't exists</p>
		}

		const { id, optionOne } = question
		const { name } = questionAuthor

		return (
			<div className='question-teaser'>
				<div className='heading'>
					{name} asks:
				</div>
				<div className='col-1'>
					<div className='author'>
						<Avatar user={questionAuthor} />
					</div>
				</div>
				<div className='col-2'>
					<h2>Would you rather</h2>
					
					<div className='question-title'>{optionOne.text}...</div>
					
					<Link to={`/question/${id}`} className='question-link'>View question</Link>

				</div>

				
				
			</div>
		)
	}
}

function mapStateToProps ({users, questions}, {id}) {
	const question = questions[id]
	const questionAuthor = question ? users[question.author] : null

	return {
		questionAuthor,
		question: question ? question : null
	}
}

// TO THINK ABOUT IT... 
// function mapStateToProps ({authedUser, users, questions}, {id}) {
// 	const question = questions[id]
// 	const authedUserAnswers = users[authedUser].answers

// 	return {
// 		question: question
	// 		? formatQuestion(question, users[question.author], authedUser, authedUserAnswers)
	// 		: null
// 	}	
// }

export default connect(mapStateToProps)(QuestionTeaser)