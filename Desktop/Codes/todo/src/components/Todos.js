import React from 'react';
import TodoItem from './TodoItem';
import PropTypes from 'prop-types';

function Todos() {
  return React.state.todos.map((todo) => (
    <TodoItem key = {todo.id} todo = {todo} markComplete={React.markComplete} />
  ));
}

Todos.propTypes = {
  todos: PropTypes.array.isRequired
}
export default Todos;
