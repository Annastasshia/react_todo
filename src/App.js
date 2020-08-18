import React from 'react';
import Todos from './components/Todos.js'

import './App.css';


class App extends React.Component {
  render() {
    return (
      <div className="App">
        <h1>app</h1>
        <Todos />
      </div>
    );
  }
}

export default App;
