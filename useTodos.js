import {useEffect, useReducer} from "react";
import {todoReducer} from "../08-useReducer/todoReducer.js";



const initialState = [];
const init = (initialState) => {
    return JSON.parse(localStorage.getItem('todos')) || initialState;
}

export const useTodos = () => {

    const [todos, dispatch] = useReducer(todoReducer, initialState, init);

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos));
    }, [todos]);
    const handleNewTodo = (todo) => {
        const action = {
            type: '[TODO] Add Todo',
            payload: todo,
        }
        dispatch( action );
    }

    const handleRemoveTodo = (todoId) => {
        const action = {
            type: '[TODO] Remove Todo',
            payload: todoId,
        }
        dispatch( action );
    }

    const handleTodoDone = (todoId) => {
        const action = {
            type: '[TODO] Mark Todo done',
            payload: todoId,
        }
        dispatch( action );
    }

    return {
        todos,
        todoAllCount: todos.length,
        todoPendingCount: todos.filter(todo => !todo.done).length,
        handleNewTodo,
        handleRemoveTodo,
        handleTodoDone,
    }
}