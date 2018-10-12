import React, { Component } from 'react'
import { connect } from 'react-redux'
import { handleSaveQuestion } from '../actions/questions'

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
	}

	render () {
		return (
			<div className='question-add-form'>
			   
				<form onSubmit={this.handleSubmit} >
					<label>
						Text 1:
						<textarea 
							type="radio" 
							name="text1"
							value={this.state.text1}
							onChange={this.handleChange}
						/>
					</label>
<br />
					<label>
						Text 2:
						<textarea 
							type="radio" 
							name="text2"
							value={this.state.text2}
							onChange={this.handleChange}
						/>
					</label>
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

export default connect(mapStateToProps)(QuestionAddNewForm)