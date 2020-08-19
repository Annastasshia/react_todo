import React from 'react';
import Todos from './components/Todos.js'

import './App.css';


class App extends React.Component {
  state = {
    todos: [
      {
        id: 1,
        title: 'laundry',
        completed: false
      },
      {
        id: 2,
        title: 'wash the dishes',
        completed: true
      },
      {
        id: 3,
        title: 'Vacuum',
        completed: false
      }
    ]
  }

  // Toggle complete: this method controls the checkbox input creates in todoitem.js and has been passed up through the todo.js props 
  markComplete = (id) => {
    this.setState({ todos: this.state.todos.map(todo => {
      if(todo.id === id) {
        todo.completed = !todo.completed
      }
      return todo;
    })})

    console.log("you have hit the checkbox")
}

// delete Todo
delTodo = (id) => {
  console.log(id)
}

  render() {
    
    return (
      <div className="App">
        <h1>app</h1>
        
        {/* Taking the "todos" from their main app component state you can pass it to the 'Todos' component below to access it as a property in the component or a 'prop'*/}

        <Todos todos={this.state.todos} markComplete={this.markComplete} delTodo={this.delTodo}/> 
      </div>
    );
  }
}

export default App;
