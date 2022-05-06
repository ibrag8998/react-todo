import React, { Component } from "react"

class TodoItem extends Component {
  render() {
    return (
      <li className="todo-item">
        <button
          className={
            "complete-btn " +
            (this.props.todo.completed ? "is-checked" : "is-unchecked")
          }
          onClick={() => this.props.toggleCompletedTodo(this.props.todo)}
        ></button>
        <div className="todo-text">{this.props.todo.text}</div>
        <button
          className="remove-btn"
          onClick={() => {
            let sure = window.confirm("Sure to delete?")

            if (sure) {
              this.props.removeTodo(this.props.todo)
            }
          }}
        >
          rm
        </button>
      </li>
    )
  }
}

export default TodoItem
