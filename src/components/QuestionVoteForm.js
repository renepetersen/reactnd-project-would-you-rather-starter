import React, { Component } from 'react'
import { connect } from 'react-redux'
import { handleAnswer } from '../actions/questions'

class QuestionVoteForm extends Component {
	constructor(props) {
		super(props);
		this.state = {
			answer: ''
		}
		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}
	handleChange(e) {
		this.setState({
			answer: e.target.value
		});
	}
	handleSubmit(e) {
		e.preventDefault();

		const { dispatch, authedUser, id } = this.props

		dispatch(handleAnswer({
			authedUser,
			qid: id,
			answer: this.state.answer
		}))
	}
	
	render() {
		const { optionOne, optionTwo } = this.props

		return (
			<form className='question-vote' onSubmit={this.handleSubmit}>
				<label>
					<input 
						type="radio" 
						value='optionOne'
						checked={this.state.answer === "optionOne"}
						onChange={this.handleChange}
					/><span>{optionOne.text}</span>
				</label>
					
				<label>
					<input 
						type="radio" 
						value='optionTwo'
						checked={this.state.answer === "optionTwo"}
						onChange={this.handleChange}
					/><span>{optionTwo.text}</span>
				</label>
				
				<div className={this.state.answer !== '' ? 'button-visible': 'button-invisible'}>
					<button type="submit" disabled={this.state.answer === '' ? true : false }>Submit answer</button>
				</div>
			</form>
		)
	}
}

function mapStateToProps ({authedUser}) {
	return {
		authedUser: authedUser
	}
}

export default connect(mapStateToProps)(QuestionVoteForm)