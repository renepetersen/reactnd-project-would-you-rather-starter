import React, { Component } from 'react'

class QuestionAnwser extends Component {
	render() {
		const {
			option, 
			totalVotes,
			perc } = this.props

		return (
			<div className='question-answer'>
				{option.text} <br />
				{option.votes.length} out of {totalVotes} is {perc}%
			</div>
		)
	}
}

export default QuestionAnwser