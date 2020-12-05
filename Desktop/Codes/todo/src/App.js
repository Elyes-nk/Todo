import React from 'react';
import './App.css'; 
import Todos from './components/Todos';

function App() {

  React.markComplete = () => {
    console.log('hello')
  }

  React.state = {
    todos: [
      {
        id: 1,
        title: 'take out trash',
        completed: true,
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
  return ( 
    <div className="App">
      <h1> Todo App</h1>
      <Todos todos = {React.state.todos} markComplete={React.markComplete} />
    </div>
  );
}


export default App;
