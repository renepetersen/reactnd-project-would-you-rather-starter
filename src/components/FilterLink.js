import React, { Component } from 'react'
import { connect } from 'react-redux'
import { setVisibilityFilter } from '../actions/visibilityFilter'

class Filterlink extends Component {
	render() {
		const { onClick, active, children } = this.props

		return (
			<button
				onClick={onClick}
				disabled={active}
			>
			{children}
			</button>
		)
	}
}

const mapStateToProps = (state, ownProps) => ({
	active: ownProps.filter === state.visibilityFilter
})

const mapDispatchToProps = (dispatch, ownProps) => ({
	onClick: () => dispatch(setVisibilityFilter(ownProps.filter))
})

export default connect(mapStateToProps, mapDispatchToProps)(Filterlink)