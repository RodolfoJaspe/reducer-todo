import React,{useState, useReducer} from 'react';

const  TodoForm = (props) =>{


    const[inputState, setInputState] =useState({
        name:""
    })

    const handleChange = e => {
        setInputState({name: e.target.value})
    }

    const submitForm = e => {
        e.preventDefault();
        props.dispatch({type: "ADD_TODO", payload: inputState.name});
        setInputState({name: ""});
    }

    return (
        <form onSubmit={submitForm}>
            <input type="text" name="todo" id="todo" value={inputState.name} onChange={handleChange}/>
            <button>Add Todo</button>
        </form>
    )
}

export default TodoForm