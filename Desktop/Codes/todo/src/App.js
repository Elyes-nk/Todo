import React from 'react';
import './App.css'; 
import Todos from './components/Todos';
import Header from './components/layout/Header';
import AddTodo from './components/AddTodo';
import { v4 as uuid} from 'uuid';

class App extends React.Component {
  state = {
    todos: [
      {
        id: uuid(),
        title: 'take out trash',
        completed: false,
      },
      {
        id: uuid(),
        title: 'do some sport',
        completed: false,
      },
      {
        id: uuid(),
        title: 'take some courses',
        completed: false,
      },
      {
        id: uuid(),
        title: 'relaxe',
        completed: false,
      },
    ]
  }
  // Completed or not
  markComplete = (id) => {
    this.setState({
      todos: this.state.todos.map(todo => {
        if(todo.id === id)
        {
          todo.completed = !todo.completed
        }
        return todo;
      })
    });
  }
  // Delete todo
  delTodo = (id) => {
    // Filter
    this.setState({ todos: [...this.state.todos.filter(todo => todo.id !== id)]})
  }
  // Add Todo
  onSubmit = (title) => {
    const NewTodo = {
      id: uuid(),
      title,
      completed: false,
    }
    // Concatinate 
    this.setState({ todos: [...this.state.todos, NewTodo]});
  }
  render() {
  return ( 
    <div className="App">
          <div className="container">
            <Header />
            <AddTodo onSubmit={this.onSubmit} />
            <Todos todos = {this.state.todos} markComplete={this.markComplete} delTodo={this.delTodo} />
          </div>
    </div>
  );
}
}

export default App;
