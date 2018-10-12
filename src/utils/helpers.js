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
		optionOne,
		optionTwo,
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