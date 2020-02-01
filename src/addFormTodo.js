import React, { Component } from 'react'

export default class AddTodo extends Component {
    state = {
        id: "",
        content: "",
        // dateOfFinish: "", 
        // dateOfInput: "",
        // status: 1
    }
    handleChange = (e) => {
        this.setState({
            content: e.target.value
        })
    }
    handleDateOfFinish = (e) => {
        this.setState({
            dateOfFinish: e.target.value
        })
    }
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.addTodo(this.state);
        this.setState({content: ""})
        console.log(this.state);
    }
    
    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>Add new Todo: </label>
                    <input type="text" onChange={this.handleChange} value={this.state.content} />
                    {/* <label>Set time to finish: </label>
                    <input type="date" onChange={this.handleDateOfFinish} /> */}
                    <button className="btn-small right">Submit</button>
                </form>
            </div>
        )
    }
}
