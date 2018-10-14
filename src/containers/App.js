import React, { Component, Fragment } from 'react'
import { 
	BrowserRouter as Router, 
	Route,
	Switch } from 'react-router-dom'
import '../styles/css/App.css'
import { connect } from 'react-redux'
import LoadingBar from 'react-redux-loading'
import { handleInitialData } from '../actions/shared'
import Login from '../components/Login'
import LogoutButton from '../components/LogoutButton'
import Nav from '../components/Nav'
import AuthedUserInfo from '../components/AuthedUserInfo'
import Dasboard from './Dashboard'
import QuestionPage from './QuestionPage'
import QuestionAddNewPage from './QuestionAddNewPage'
import Leaderboard from './Leaderboard'
import NoMatch from './NoMatch'


class App extends Component {
	componentDidMount() {
		this.props.dispatch(handleInitialData())
	}

	render() {
		return (
			<Router>
				<Fragment>
					<div className='loading-bar'><LoadingBar /></div>
					{this.props.login === true 
					? 	<div className='container'><Login /></div>
					:	<Fragment>
							<header>
								<Nav />
								<AuthedUserInfo />
								<LogoutButton />
							</header>

							<div className='container'>	
								<Switch>
									<Route path='/question/:id' exact component={QuestionPage} />
									<Route path='/' exact component={Dasboard} />
									<Route path='/new' exact component={QuestionAddNewPage} />
									<Route path='/leaderboard' exact component={Leaderboard} />
									<Route component={NoMatch} />
								</Switch>
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