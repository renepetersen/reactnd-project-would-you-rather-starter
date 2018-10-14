import {
	_getUsers,
	_getQuestions,
	_saveQuestionAnswer,
	_saveQuestion
} from './_DATA.js'

export function getInitialData () {
	return Promise.all([
		_getUsers(),
		_getQuestions(),
	]).then(([users, questions]) => ({
		users,
		questions,
	}))
}

export function saveQuestionAnswer (answerParams) {
	return _saveQuestionAnswer(answerParams)
}

export function saveQuestion (questionParams) {
	return _saveQuestion(questionParams)
}