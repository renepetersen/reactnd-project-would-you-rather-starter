import React, { Component } from 'react'
import { connect } from 'react-redux'

class Dashboard extends Component {
  render() {
      console.log(this.props)
    return (
      <div>
        <h3 className='center'>Questions</h3>
        <ul className='dashboard-list'>
            {this.props.questionsIds.map((id) => (
                <li key={id}>
                    <div>Question ID: {id}</div>
                </li>
            ))}
        </ul>
      </div>
    )
  }
}

function mapsStateToProps ({ questions }) {
    return {
        questionsIds: Object.keys(questions)
            .sort((a,b) => questions[b].timestamp - questions[a].timestamp)
    }
}

export default connect(mapsStateToProps)(Dashboard)