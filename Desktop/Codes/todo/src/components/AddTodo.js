import React, { Component } from 'react'

export class AddTodo extends Component {
    state = {
        title: ''
    }

    // Function input
    onAdd = (e) => {
        this.setState({[e.target.name]: e.target.value});
    }
    // Function submit
    onSubmit = (e) => {
        e.preventDefault();
        this.props.onSubmit(this.state.title);
        this.setState({title: ''});
    }

    render() {
        return (
            <div>
                <form onSubmit={this.onSubmit} style={{display: 'flex'}}>
                    <input 
                        type='text' 
                        name='title' 
                        placeholder='What are your plans for the day...' 
                        style={{flex: '10'}}
                        onChange={this.onAdd}
                    />
                    <input 
                        type='submit'
                        value='Submit'
                        className='btn'
                        style={{ flex: '1'}}
                    />
                </form>
            </div>
        )
    }
}

export default AddTodo
