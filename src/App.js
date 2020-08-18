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

  render() {
    console.log(this.state.todos)
    return (
      <div className="App">
        <h1>app</h1>
        
        {/* Taking the "todos" from their main app component state you can pass it to the 'Todos' component below to access it as a property in the component or a 'prop'*/}

        <Todos todos={this.state.todos} />
      </div>
    );
  }
}

export default App;
