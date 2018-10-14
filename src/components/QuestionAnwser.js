import React, { Component } from 'react'

class QuestionAnwser extends Component {
	render() {
		const {
			option, 
			totalVotes,
			perc } = this.props

		const styles = { 
			width: perc +'%'
		}

		return (
			<div className='question-answer'>
				{option.text} <br />
				
				<div className='progressbar'>
					<span style={styles}>{perc}%</span>
				</div>
				{option.votes.length} out of {totalVotes} votes
			</div>
		)
	}
}

export default QuestionAnwser