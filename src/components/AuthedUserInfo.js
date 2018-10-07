import React, { Component } from 'react'
import { connect } from 'react-redux'

class AuthedUserInfo extends Component {
    render() {
        const { userInfo } = this.props

        if (userInfo === null) {
            return <p>This User doesn't existd</p>
        }

        const { name, avatarURL } = userInfo

        return (
            <div className="authed-user-info">
                <img
                    src={avatarURL}
                    alt={`Avatar of ${name}`}
                    className='avatar'
                />
                { name }
            </div>
        )
    }
}

function mapStateToProps ({authedUser, users}) {
    const userInfo = users[authedUser]

    return {
        userInfo: userInfo
    }
}

export default connect(mapStateToProps)(AuthedUserInfo)