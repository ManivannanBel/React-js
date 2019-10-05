import React, { Component } from 'react'
import ChildComponent from './ChildComoponent'

class ParentComponent extends Component {
    
    constructor(props) {
        super(props)
    
        this.state = {
             message : 'Hello from child to parent'
        }

        this.showMessage = this.showMessage.bind(this)
    }

    showMessage(childMessage) {
        alert(`Message from ${childMessage} ${this.state.message}`)
    }
    
    render() {
        return (
            <div>
                <h2>Send message from child to parent</h2>
                <ChildComponent showMessageHandler={this.showMessage}/>
            </div>
        )
    }
}


export default ParentComponent
