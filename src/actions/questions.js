import { saveQuestionAnswer } from '../utils/api'
import { saveAnswer } from '../actions/shared'

export const RECEIVE_QUESTIONS = 'RECEIVE_QUESTIONS'

export function receiveQuestions (questions) {
	return {
		type: RECEIVE_QUESTIONS,
		questions,
	}
}

// Async action creator, Thunk action-creator 
//  -> dispatch to saveQuestionVote  (store update)
//  -> a call to saveLikeToggle (database update)
export function handleAnswer (params) {

	return (dispatch) => {
	// optimistic update
	dispatch(saveAnswer(params))

	return saveQuestionAnswer(params)
		.catch((e) => {
			console.warn('Error in handleAnswer: ', e)

			// revert optimistic update
			dispatch(saveAnswer(params))
			alert('The was an error saving your question answer. Try again.')
		})
	}
}