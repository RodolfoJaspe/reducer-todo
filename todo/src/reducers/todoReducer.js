const todoReducer = (state, action) => {
    switch (action.type) {
        case "ADD_TODO":
            return {...state, todos:[...state.todos,{name: action.payload, id:Date.now(), completed: false}]};   
        case "TOGGLE_TODO":
            const newTodos = state.todos.map(todo => {
                if(todo.name === action.payload.name){
                    todo = action.payload
                }
                return {...todo }
            })
            console.log("todo")
            return {...state, todos: [...newTodos]};
        case "CLEAR_COMPLETED":
            const activeTodos = state.todos.filter(todo => todo.completed === false)
            return {...state, todos: [...activeTodos]}
        default:
            return state    
    }
}

export default todoReducer