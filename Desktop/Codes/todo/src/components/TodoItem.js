import React, { Component } from 'react'
import Proptypes from 'prop-types';

export class TodoItem extends Component {
    getStyle = () => {        
        return { 
            background: '#f4f4f4',
            padding: '10px',
            borderBottom: '1px ccc dotted',
            textDecoration: this.props.todo.completed ? 'line-through' : 'none'}
    }
  
    render() {
        const { id, title } = this.props.todo;
        return (
            <div style={this.getStyle()}>
                <h3>
                    {title}{'      '}
                    <input type='checkbox'  onChange={this.props.markComplete.bind(this, id)} />
                    <button style={btnStyle} onClick={this.props.delTodo.bind(this, id)}>X</button>
                </h3>
            </div>
        )
    }
}
TodoItem.propTypes = {
    todo: Proptypes.object.isRequired
}
const btnStyle = {
    background: '#ff0000',
    color: '#fff',
    border: 'none',
    padding: '5px, 10px',
    borderRadius: '50%',
    cursor: 'pointer',
    float: 'right'
}
export default TodoItem
