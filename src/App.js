import React, { Component } from 'react'
import Todos from './todos';
import AddTodo from './addFormTodo';

class App extends Component {
    state = {
        // status: 0 - failed, 1 - in work, 2 - complete ???
        todos: [
            {id: 1, 
                content: "be like all, do the ToDo", 
                dateOfFinish: "00:00 07.02.2020", 
                dateOfInput: "20:51 30.01.2020",
                status: 1},
            {id: 2, 
                content: "Make it with Redux", 
                dateOfFinish: "00:00 14.02.2020", 
                dateOfInput: "20:51 30.01.2020",
                status: 1},
            {id: 3, 
                content: "Use Material UI", 
                dateOfFinish: "00:00 07.02.2020", 
                dateOfInput: "20:51 30.01.2020",
                status: 1}
        ]
    }
    deleteTodo = (id) => {
        const newTodos = this.state.todos.filter(todo => {
            return todo.id !== id
        })
        this.setState({todos: newTodos})
    }
    addTodo = (todo) => {
        let lastId = this.state.todos.length - 1;
        todo.id = (this.state.todos[lastId].id + 1)
        let newTodos = [...this.state.todos, todo]
        this.setState({todos: newTodos})
    }
    render() {
        return (
            <div className="todo_spa container">
                <h1 className="center blue-text brand-logo">Todo's list</h1>
                <Todos todos={this.state.todos} deleteTodo={this.deleteTodo} />
                <AddTodo addTodo={this.addTodo} />
            </div>
        )
    }
}


export default App;
