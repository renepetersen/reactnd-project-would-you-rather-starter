import { VisibilityFilters } from '../actions/visibilityFilter'
import { SET_VISIBILITY_FILTER } from '../actions/visibilityFilter'

const visibilityFilter = (state = VisibilityFilters.SHOW_UNANSWERD, action) => {
	switch (action.type) {
		case SET_VISIBILITY_FILTER:
			return action.filter
		default:
			return state
	}
}

export default visibilityFilter