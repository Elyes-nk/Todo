import React, { Component } from 'react';
import './App.css';
import Todos from './components/Todos';

Class App extends Component {
  state = {
    todos: [
      {
        id: 1,
        title: 'take out trash',
        completed: false,
      },
      {
        id: 2,
        title: 'sport',
        completed: false,
      },
      {
        id: 3,
        title: 'take some courses',
        completed: false,
      },
    ]
  }
  render() {  
  return ( 
    <div className="App">
      <h1> Todo App</h1>
      <Todos todos = {this.state.todos}/>
    </div>
  );
  }
}

export default App;
