import React, { Component } from 'react'

class ChildComoponent extends Component {
    render() {
        return (
            <div>
                <button onClick={() => this.props.showMessageHandler('Child')}>Send message from child</button>
            </div>
        )
    }
}

export default ChildComoponent