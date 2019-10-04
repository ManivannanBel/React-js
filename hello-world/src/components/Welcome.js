//Class Component

import React, { Component } from 'react'

class Welcome extends Component{
    render(){
        return (
            <div>
                <h1>
                    Welcome {this.props.fname} {this.props.lname}
                </h1>
                <p>
                    Class Component
                </p>
            </div>)
    }
}

export default Welcome