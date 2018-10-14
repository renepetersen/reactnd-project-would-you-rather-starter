import React, { Component } from 'react'
import { connect } from 'react-redux'
import { handleSaveQuestion } from '../actions/questions'
import { withRouter } from 'react-router-dom'

class QuestionAddNewForm extends Component {
	constructor(props) {
		super(props);
		this.state = {
			text1: '',
			text2: ''
		}
		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}
	handleChange(e) {
		let nameField = e.target.name;

		this.setState({
			[nameField]: e.target.value
		});
	}
	handleSubmit(e) {
		e.preventDefault();

		const { dispatch, authedUser } = this.props

		dispatch(handleSaveQuestion(
			this.state.text1,
			this.state.text2,
			authedUser
		))

		this.props.history.push(`/`)
	}

	render () {
		return (
			<div className='question-add-form'>
				<h2 className="heading">Create new question</h2>
			   
			    <p>Would You Rather...</p>

				<form onSubmit={this.handleSubmit} >
					<label>
						<textarea 
							type="radio" 
							name="text1"
							value={this.state.text1}
							onChange={this.handleChange}
							placeholder='Enter option one text here'
						/>
					</label>

					<label>
						<textarea 
							type="radio" 
							name="text2"
							value={this.state.text2}
							onChange={this.handleChange}
							placeholder='Enter option two text here'
						/>
					</label>

					<div>
						<button type="submit" disabled={(this.state.text1 && this.state.text2) === '' ? true : false }>Submit question</button>
					</div>
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

export default withRouter(connect(mapStateToProps)(QuestionAddNewForm))