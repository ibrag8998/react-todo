import React, { Component } from "react"
import TodoItem from "./TodoItem"

class TodoList extends Component {
  render() {
    const todoItems = this.props.todos.map((cur, i) => (
      <TodoItem
        key={cur.id}
        todo={cur}
        toggleCompletedTodo={todo => this.props.toggleCompletedTodo(todo)}
        removeTodo={todo => this.props.removeTodo(todo)}
      />
    ))

    return <ul className="todo-list">{todoItems}</ul>
  }
}

export default TodoList
