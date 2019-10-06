import React, { Component } from 'react'
import './css/main.css'

export class Form extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             username : '',
             comments : '',
             topic : 'React js'
        }
    }
    
    handleUsername = (event) => {
        this.setState({
            username : event.target.value
        })
    }

    handleComment = (event) => {
        this.setState({
            comments : event.target.value
        })
    }

    handleTopic = (event) => {
        this.setState({
            topic : event.target.value
        })
    }

    handleSubmit = (event) => {
        alert(`Username=${this.state.username} \nComment\n${this.state.comments}\ntopic=${this.state.topic}`)
        event.preventDefault()  //Prevent the form from refreshing after submitting the form
    }

    render() {
        return (
            <div className='border'>
                <form  onSubmit={this.handleSubmit}>
                    <div>
                        <label>Username </label>
                        <input type='text' value={this.state.username} onChange={this.handleUsername}></input>
                    </div>
                    <div>
                        <label>Comments </label>
                        <textarea value={this.state.comments} onChange={this.handleComment}></textarea>
                    </div>
                    <div>
                        <label>Topic </label>
                        <select value={this.state.topic} onChange={this.handleTopic}>
                            <option value='React js'>React js</option>
                            <option value='Angular js'>Angular js</option>
                            <option value='Vue js'>Vue js</option>
                        </select>
                    </div>
                    <div>
                        <button type='submit'>submit</button>
                    </div>
                </form>
            </div>
        )
    }
}

export default Form
