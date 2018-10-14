export function formatDate (timestamp) {
	const d = new Date(timestamp)
	const time = d.toLocaleTimeString('en-US')
	return time.substr(0, 5) + time.slice(-2) + ' | ' + d.toLocaleDateString()
}

export function objectSort( src ) {
	const keys = Object.keys( src );
	keys.sort();
	return keys.reduce(( target, key ) => {
		target[ key ] = src[ key ];
		return target;
	}, {});
};

export function formatQuestion (question, author, authedUserAnswers) {
	const { id, timestamp, optionOne, optionTwo, } = question
	const { name, avatarURL } = author

	return {
		id,
		timestamp,
		optionTwo,
		optionOne,
		name,
		user: !avatarURL ? null : {
			name : name,
			avatarURL: avatarURL
		},
		totalVotes: optionOne.votes.length + optionTwo.votes.length,
		hasVoted: Object.keys(authedUserAnswers).includes(id),
		authedUserQuestionAnswer : authedUserAnswers[id] 
	}
}

export function calcPerc(numberVotes, totalVotes) {
	return (numberVotes / totalVotes).toFixed(2) * 100;
}

export function formatLeaderboardUser (id, name, avatarURL, totalanswers, totalquestions) {

	return {
		id,
		name,
		userAvatar: !avatarURL ? null : {
			name : name,
			avatarURL: avatarURL
		},
		totalAnswers: totalanswers,
		totalQuestions: totalquestions,
		totalScore: totalanswers + totalquestions
	}
}