import React, { Component } from 'react'
import QuestionAnwser from './QuestionAnwser'
import { calcPerc } from '../utils/helpers'

class QuestionAnswers extends Component {
	render() {
		const {
			optionOne, 
			optionTwo, 
			totalVotes, 
			authedUserQuestionAnswer } = this.props

		let userchoiceOptOne = authedUserQuestionAnswer === 'optionOne' ? 'is-userchoice' : ''
		let userchoiceOptTwo = authedUserQuestionAnswer === 'optionTwo' ? 'is-userchoice' : ''

		const percVotes1 = calcPerc(optionOne.votes.length, totalVotes)
		const percVotes2 = calcPerc(optionTwo.votes.length, totalVotes)

		percVotes1 >= percVotes2
			? userchoiceOptOne += ' is-winner' 
			: userchoiceOptTwo += ' is-winner'

		return (
			<div className="question-answers">
				<div className={"answer " + userchoiceOptOne}>
					<QuestionAnwser 
						option={optionOne} 
						totalVotes={totalVotes}
						perc = {percVotes1}
					/>
				</div>
				<div className={"answer " + userchoiceOptTwo}>
					<QuestionAnwser 
						option={optionTwo} 
						totalVotes={totalVotes} 
						perc = {percVotes2}
					/>
				</div>
			</div>
		)
	}
}

export default QuestionAnswers