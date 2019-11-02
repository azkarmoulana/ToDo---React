import React, { Component } from 'react';
import PropTypes from 'prop-types'

export class TodoItem extends Component {

    getStyles = () => {
        return {
            background: '#f4f4f4',
            padding: '16px',
            borderBottom: '1px #ccc dotted',
            textDecoration: this.props.todo.completed ? 'line-through' : 'none'
         }
    }
    
    render() {
        const {id, title} = this.props.todo;
        return (
            <div style={this.getStyles()}>
                <p>
                    <input type="checkbox" onChange={this.props.markCompleted.bind(this, id)}></input> {' '}
                    { title }
                    <button style={btnStyles} onClick={this.props.removeTask.bind(this, id)}>x</button>
                </p>
            </div>
        )
    }
}

TodoItem.propTypes = {
    todo: PropTypes.object.isRequired
}

const btnStyles = {
    background: '#ff0000',
    color: '#fff',
    border: 'none',
    padding: '5px 9px',
    borderRadius: '50%',
    cursor: 'pointer',
    float: 'right'
}

export default TodoItem
