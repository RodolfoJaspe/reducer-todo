import React,{ useReducer, useState } from 'react';
import './App.css';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import todoReducer from './reducers/todoReducer';


function App() {
    const initialState = {
        todos:[],
    }
    const[state, dispatch] = useReducer(todoReducer, initialState);
    console.log(state.todos)

  return (
    <div className="App">   
       <TodoForm state={state} dispatch={dispatch}/>
       <TodoList todos={state.todos} dispatch={dispatch}/>
    </div>
  );
}

export default App;
