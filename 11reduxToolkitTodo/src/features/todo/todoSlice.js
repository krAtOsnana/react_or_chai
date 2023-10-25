import { createSlice ,nanoid } from "@reduxjs/toolkit";


const initialState = {
    todos : [{ id: "1" , text: "halwwa" }]
}

export const todoSlice = createSlice({
    name:'todo',
    initialState,
    reducers:{ 
        addTodo:(state , action) => {
            const todo={
                id: nanoid(),
                text: action.payload
            }
            state.todos.push(todo)

        },
        removeTodo: () => {},
    }

})