import React, { Component } from 'react'
import { connect } from 'react-redux'
import { formatDate } from '../utils/helpers'

class Question extends Component {
    render() {
        const { question } = this.props

        if (question === null) {
            return <p>This Question doesn't existd</p>
        }

        const { id, author, timestamp, optionOne, optionTwo } = question

        return (
            <div className='question'>
                {this.props.authedUser} <br/>
                {id} <br/>
                {author} <br/>
                {formatDate(timestamp)}<br/>
                {optionOne.text}<br/>
                {optionTwo.text}<br/>
            </div>
        )
    }
}

function mapStateToProps ({authedUser, users, questions}, { id }) {
    const question = questions[id]

    return {
        authedUser,
        question: question
    }
}

export default connect(mapStateToProps)(Question)