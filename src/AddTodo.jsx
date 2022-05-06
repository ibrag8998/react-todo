import React from "react"

class AddTodo extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      inputValue: "",
    }
  }

  updateInputValue(e) {
    this.setState({ inputValue: e.target.value })
  }

  render() {
    return (
      <div className="add-todo-container">
        <h1 className="todos-h">Todos</h1>
        <form
          onSubmit={e => {
            e.preventDefault()

            const value = this.state.inputValue.trim()

            if (value === "") return

            this.props.addTodo(value)
            this.setState({ inputValue: "" })
          }}
        >
          <input
            value={this.state.inputValue}
            onChange={e => this.updateInputValue(e)}
            className="todo-input"
          />
        </form>
      </div>
    )
  }
}

export default AddTodo
