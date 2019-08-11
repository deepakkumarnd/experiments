import React from "react"
import TodoItem from "./TodoItem"
import TodoListData from "./TodoListData"
import NewTodo from "./NewTodo"

class TodoList extends React.Component {
  constructor() {
    super()
    this.state = {
      todos: TodoListData
    }

    this.handleChange = this.handleChange.bind(this)
    this.addNewItem = this.addNewItem.bind(this)
  }

  handleChange(id) {
    this.setState(previousState => {
      let updatedTodos = previousState.todos.map(item => {
        if (item.id === id) {
          item.completed = !item.completed
        } 

        return item
      });

      return ({ todos: updatedTodos })
    })
  }

  addNewItem(item) {

    console.log("Add new item")
    this.setState(previousState => {
      const newId = previousState.todos.length + 1
      item.id = newId

      let updatedTodos = {
        todos: previousState.todos.concat(item)
      }

      return updatedTodos
    })
  }

  render() {
    const todosComponents = this.state.todos.map((item) => {
      return (
          <TodoItem 
            key={item.id} 
            todo={item} 
            onChange={this.handleChange} />
        )
    })

    return (
      <div>
        <NewTodo add={this.addNewItem} />
        {todosComponents}
      </div>
    )
  }
}

export default TodoList