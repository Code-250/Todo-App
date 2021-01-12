import React, { useState } from 'react'
import TodoForm from './Todo-Form';
import Todo from "./Todo"

function TodoList({setInput,input, todos, setTodos}){

    // const [todos, setTodos] =useState([]);  
        
    return (
        <div className = 'todo-contaier'>
            <h1>To day's Plan</h1>
            <TodoForm input={input} todos={todos} setTodos={setTodos} setInput={setInput}/>
                <Todo todos={todos}/>
       
        </div>
    )
}

export default TodoList
 