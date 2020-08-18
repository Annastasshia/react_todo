import React, { Component } from 'react';
import TodoItem from './TodoItem';



class Todos extends Component {
  render() {
    
    console.log(this.props.todos)

    // the map method can loop through an array. in this case it is pulling the 'todos' property from the app.js
    return this.props.todos.map((task) => (

        // this is what you will display in the browser
        <div>
        <h3>{task.title} </h3>
        <TodoItem />
        </div>
    ));
  }
}

export default Todos;
