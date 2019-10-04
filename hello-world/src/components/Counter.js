import React, { Component } from 'react'

class Counter extends Component {

    constructor(props){
        super(props)

        this.state = {
            count : 0
        }
    }

    increment(){
        /* it is asynchronous
        this.setState({
            count: this.state.count + 1
        })
        */

        this.setState(prevState => ({
            count : prevState.count + 1
        }))

        //-> Always make use of setState and never try to modify state directly
        //-> If any code has to be executed after updating the state, place that code in the call back function which is the second argument to setState method
        //-> When you have to update state based on pervious state value, pass in the function as argument instead of regular object
    }

    render() {
        return (
            <div>
             <h5>Count {this.state.count}</h5>   
             <button onClick={() => this.increment()}>Increment</button>
            </div>
        )
    }
}

export default Counter
