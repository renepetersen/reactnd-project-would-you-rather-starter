import { RECEIVE_QUESTIONS, ADD_NEWQUESTION } from '../actions/questions'
import { ADD_ANSWER,  } from '../actions/shared'

export default function questions (state = {}, action) {
	switch(action.type) {
		case RECEIVE_QUESTIONS :
			return {
				...state,
				...action.questions
			}
		case ADD_ANSWER : 
			return {
				...state,
				[action.qid]: {
					...state[action.qid],
					[action.answer]: {
						...state[action.qid][action.answer],
						votes: state[action.qid][action.answer].votes.concat([action.authedUser])						
					}
				}
			}
		case ADD_NEWQUESTION :
			return {
				...state,
				[action.question.id]: action.question
			}
		default :
			return state
	}
}