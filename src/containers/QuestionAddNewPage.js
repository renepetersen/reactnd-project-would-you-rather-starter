import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import QuestionAddNewForm from '../components/QuestionAddNewForm'

class QuestionAddNewPage extends Component {
	render() {
		return (
			<div>
				<QuestionAddNewForm />

				<Link to={`/`} className='go-back'>Go back</Link>
			</div>
		)
	}
}

export default QuestionAddNewPage