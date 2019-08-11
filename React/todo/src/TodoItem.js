import React from "react"
import './App.css';

class TodoItem extends React.Component {
  render() {
    const styleClass = this.props.todo.completed ? "Todo-completed" : "Todo"
    return (
      <div>
        <p className={styleClass}>{this.props.todo.title}</p>
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