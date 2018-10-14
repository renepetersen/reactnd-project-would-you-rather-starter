export const SET_VISIBILITY_FILTER = 'SET_VISIBILITY_FILTER'

export const VisibilityFilters = {
	SHOW_ANSWERD: 'SHOW_ANSWERD',
	SHOW_UNANSWERD: 'SHOW_UNANSWERD'
}

export const setVisibilityFilter = filter => ({
	type: SET_VISIBILITY_FILTER,
	filter
})