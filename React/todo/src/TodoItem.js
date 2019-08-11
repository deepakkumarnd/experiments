import React from "react"

class TodoItem extends React.Component {
  render() {
    return (
      <div>
        <p>{this.props.todo.title}</p>
        <input 
          type="checkbox"
          id={this.props.todo.id}
          checked={this.props.todo.completed} 
          onChange={() => this.props.onChange(this.props.todo.id)}/>
      </div>
    )
  }
}

export default TodoItem