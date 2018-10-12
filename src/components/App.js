import React, { Component, Fragment } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import '../styles/App.css'
import { connect } from 'react-redux'
import LoadingBar from 'react-redux-loading'
import { handleInitialData } from '../actions/shared'
import Login from './Login'
import LogoutButton from './LogoutButton'
import Nav from './Nav'
import Dasboard from './Dashboard'
import AuthedUserInfo from './AuthedUserInfo'
import QuestionPage from './QuestionPage'

class App extends Component {
	componentDidMount() {
		this.props.dispatch(handleInitialData())
	}

	render() {
		return (
			<Router>
				<Fragment>
					<LoadingBar />
					{this.props.login === true 
					? 	<div className='container'><Login /></div>
					:	<Fragment>
							<header>
								<Nav />
								<AuthedUserInfo />
								<LogoutButton />
							</header>

							<div className='container'>	
								<Route path='/question/:id' exact component={QuestionPage} />
								<Route path='/' exact component={Dasboard} />
							</div>
						</Fragment>
					}
				</Fragment>
			</Router>
		)
	}
}

function mapStateToProps ({authedUser}) {
	return {
		login: authedUser === null,
	}
}

export default connect(mapStateToProps)(App);