import React from 'react';
import './Todo.css';

const Todo = (props) => {
        const {name} = props.todo;
        // console.log(props.todo)
    return (
        <div 
            onClick={props.changeSelected}
            className={`todo${props.todo.completed ? ' completed' : ''}`}
                >
            <h2>{name}</h2>
        </div>
    )
}

export default Todo