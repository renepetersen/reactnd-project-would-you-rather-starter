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
		const { id, optionOne, optionTwo } = this.props

		return (
			<div className='question-vote'>

				<form onSubmit={this.handleSubmit}>
					<label>
						<input 
							type="radio" 
							value='optionOne'
							checked={this.state.answer === "optionOne"}
							onChange={this.handleChange}
						/> {optionOne.text}
					</label>
						
<br />
					<label>
						<input 
							type="radio" 
							value='optionTwo'
							checked={this.state.answer === "optionTwo"}
							onChange={this.handleChange}
						/> {optionTwo.text}
					</label>
<br />
					
					<button type="submit">Submit</button>
				</form>
			</div>
		)
	}
}

function mapStateToProps ({authedUser}) {
	return {
		authedUser: authedUser
	}
}

export default connect(mapStateToProps)(QuestionVoteForm)