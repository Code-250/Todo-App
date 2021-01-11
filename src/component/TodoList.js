import React, { useState } from 'react'
import TodoForm from './Todo-Form'

function TodoList(){

    const [todos, setTodos] =useState([]);

    const AddTodo =(todo)=>{
        if (!todos.text || /^\s*$/.text(todo.text)){
            return
        }

        const newTodos = [todo, ...todos]
        setTodos(newTodos);
    }
    return (
        <div className = 'todo-contaier'>
            <h1>To day's Plan</h1>
            <TodoForm onSubmit={AddTodo}/>
        </div>
    )
}

export default TodoList
 