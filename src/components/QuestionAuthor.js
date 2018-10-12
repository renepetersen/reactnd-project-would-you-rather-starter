import React, { Component } from 'react'
import { formatDate } from '../utils/helpers'
import Avatar from './Avatar'

class QuestionAuthor extends Component {
	render() {
		const {
			user, 
			name,
			timestamp } = this.props

		return (
			<div className='question-author'>
				<Avatar user={user} />
				
				<div className='question-author-content'>
					<span className='question-author-name'>{name}</span>
					<span className='question-date'>{formatDate(timestamp)}</span>
				</div>
			</div>
		)
	}
}

export default QuestionAuthor