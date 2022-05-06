import React from "react"
import AddTodo from "./AddTodo"
import TodoList from "./TodoList"

class App extends React.Component {
  state = {
    todos: [],
    nextId: 1,
  }

  addTodo(text) {
    this.setState({
      todos: [
        ...this.state.todos,
        {
          text,
          completed: false,
          id: this.state.nextId,
        },
      ],
      nextId: this.state.nextId + 1,
    })
  }

  toggleCompletedTodo(todo) {
    const i = this.state.todos.findIndex(cur => cur.id === todo.id)
    this.setState({
      todos: [
        ...this.state.todos.slice(0, i),
        {
          ...todo,
          completed: !todo.completed,
        },
        ...this.state.todos.slice(i + 1),
      ],
    })
  }

  removeTodo(todo) {
    this.setState({
      todos: this.state.todos.filter(cur => cur.id !== todo.id),
    })
  }

  render() {
    return (
      <div className="app">
        <AddTodo addTodo={text => this.addTodo(text)} />
        <TodoList
          todos={this.state.todos}
          toggleCompletedTodo={todo => this.toggleCompletedTodo(todo)}
          removeTodo={todo => this.removeTodo(todo)}
        />
      </div>
    )
  }
}

export default App
