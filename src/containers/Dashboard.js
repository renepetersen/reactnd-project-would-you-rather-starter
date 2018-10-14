import React, { Component } from 'react'
import { connect } from 'react-redux'
import QuestionTeaser from '../components/QuestionTeaser'

import FilterLink from '../components/FilterLink'
import { VisibilityFilters } from '../actions/visibilityFilter'

class Dashboard extends Component {
	render() {
		return (
			<div>	
				<div className='filter-links'>
					<FilterLink filter={VisibilityFilters.SHOW_UNANSWERD}>
						Unanswerd
					</FilterLink>
					<FilterLink filter={VisibilityFilters.SHOW_ANSWERD}>
						Answerd
					</FilterLink>
				</div>

				{this.props.visibilityFilter === 'SHOW_UNANSWERD' && 
					<div>
						<h3 className='center'>Unanswerd Questions</h3>
						
						{this.props.unanswerdQuestionsIds.length > 0 
							? 
							<ul className='dashboard-list'>
								{this.props.unanswerdQuestionsIds.map((id) => (
									<li key={id}>
										<QuestionTeaser id={id} />
									</li>
								))}
							</ul>
							:
							<p>You have answerd all questions</p>
						}
					</div>
				}

				{this.props.visibilityFilter === 'SHOW_ANSWERD' && 
					<div>
						<h3 className='center'>Answerd Questions</h3>
						{this.props.answerdQuestionsIds.length > 0 
							? 
							<ul className='dashboard-list'>
								{this.props.answerdQuestionsIds.map((id) => (
									<li key={id}>
										<QuestionTeaser id={id} />
									</li>
								))}
							</ul>
							:
							<p>No answerd questions</p>
						}
					</div>
				}

			</div>
		)
	}
}

function mapStateToProps ({authedUser, users, questions, visibilityFilter}) {
	const answerdQidsArr = Object.keys(users[authedUser].answers)

	const answerdQuestions = Object.keys(questions)
		.filter(key => answerdQidsArr.includes(key))
		.reduce((obj, key) => {
			obj[key] = questions[key];
			return obj;
		}, {});

	const unanswerdQuestions = Object.keys(questions)
		.filter(key => !answerdQidsArr.includes(key))
		.reduce((obj, key) => {
			obj[key] = questions[key];
			return obj;
		}, {});

	return {
		visibilityFilter,
		answerdQuestionsIds: Object.keys(answerdQuestions)
			.sort((a,b) => questions[b].timestamp - questions[a].timestamp),
		unanswerdQuestionsIds: Object.keys(unanswerdQuestions)
			.sort((a,b) => questions[b].timestamp - questions[a].timestamp),
	}
}

export default connect(mapStateToProps)(Dashboard)