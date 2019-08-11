import React from "react"

class NewTodo extends React.Component {

  constructor() {
    super()
    this.state = {
      title: "",
      completed: false
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleClick = this.handleClick.bind(this)
  }

  handleChange(event) {
    const {value} = event.target
    this.setState({
      title: value,
      completed: false
    })
  }

  handleClick() {
    this.props.add(this.state)
  }

  render () {

    const style = {
      margin: 10
    }

    return (
      <div>
        <input 
          type="text" 
          style={style} 
          name="newTodo" onChange={this.handleChange}/>
        <button onClick={this.handleClick} >Add</button>
      </div>
    )
  }
}

export default NewTodo