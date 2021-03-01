import React from 'react';
import Todo from './Todo';

const TodoList = (props) => {
console.log(props.todos)
    const changeSelected = e => {
        const todo = props.todos.find(todo => 
            e.target.innerText === todo.name
        )
        todo.completed = !todo.completed

        props.dispatch({type:"TOGGLE_TODO", payload: todo})
    }

    return (
        <div>
            {props.todos.map(todo => (
                <Todo todo={todo} key={todo.id} changeSelected={changeSelected}/>
            ))}
            <button onClick={()=>props.dispatch({type:"CLEAR_COMPLETED"})}>Clear Completed</button> 
        </div> 
        
    )
}

export default TodoList