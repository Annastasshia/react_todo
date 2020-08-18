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
        completed: false
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
        <Todos todos={this.state.todos} />
      </div>
    );
  }
}

export default App;
