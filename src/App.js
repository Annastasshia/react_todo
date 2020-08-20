import React from 'react';
import Todos from './components/Todos.js'
import Header from './components/layout/Header.js'
import AddTodo from './components/AddTodo.js'
import { v4 as uuidv4 } from 'uuid';

import './App.css';


class App extends React.Component {
  state = {
    todos: [
      {
        id: uuidv4(),
        title: 'laundry',
        completed: false
      },
      {
        id: uuidv4(),
        title: 'wash the dishes',
        completed: true
      },
      {
        id: uuidv4(),
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
  this.setState({ todos: [...this.state.todos.filter(todo => todo.id !== id)]})
}

// Add Todo
addTodo = (title) => {
  const newTodo = {
    id: uuidv4(),
    title: title,
    completed: false
  }
  this.setState({ todos: [...this.state.todos, newTodo]})
}

  render() {
    
    return (
      <div className="App">z
        <div className="conatiner">
        <Header />
        <AddTodo addTodo={this.addTodo}/>
        {/* Taking the "todos" from their main app component state you can pass it to the 'Todos' component below to access it as a property in the component or a 'prop'*/}

        <Todos todos={this.state.todos} markComplete={this.markComplete} delTodo={this.delTodo}/> 
      </div>
      </div>
    );
  }
}

export default App;
