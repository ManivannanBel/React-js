import React, { Component } from 'react'

export class ConditionalRenderingComponent extends Component {
    
    constructor(props) {
        super(props)
    
        this.state = {
            isLoggedIn : false 
        }

        this.ManageLogin = this.ManageLogin.bind(this)
    }
    
    ManageLogin(){
        this.setState({
            isLoggedIn : !this.state.isLoggedIn
        })
    }
    
    render() {
        return this.state.isLoggedIn ? (
            <h2>You are logged in <button onClick={() => this.ManageLogin()}>Log out</button></h2>
        ) : (
            <h2>You are logged out <button onClick={() => this.ManageLogin()}>Log in</button></h2>
        )       
    }
}

export default ConditionalRenderingComponent
