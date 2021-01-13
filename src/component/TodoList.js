import React, { useState } from 'react'
import TodoForm from './Todo-Form';
import Todo from "./Todo";

function TodoList(){
    const [todos, setTodos] =useState([]);   
    
    const addTodo = todo =>{
        if (!todo.text){
            return
        }
        const newTodos= [todo, ...todos];

        setTodos(newTodos);
    }

    // removing a todo

    const removeTodo = (id)=>{
        const removeArray =[...todos].filter(todo=> todo.id !== id)

        setTodos(removeArray)

    }

    // update  todo

    const updateTodo =(todoId,newValue)=>{
        if(!newValue.text || /^\s*$/.test(newValue.text)){
            return;
        }
        setTodos(prev=> prev.map(item=>(item.id === todoId ? newValue : item)))
    }



    const completeTodo = id =>{
        let updatedTodo = todos.map(todo=>{
            if(todo.id===id){
                todo.isCompleted =!todo.isCompleted;

            }
            return todo;
        })
        setTodos(updatedTodo);
    }
    return (
        <div className = 'todo-container'>
            <h1>To day's Plan</h1>
            <TodoForm onSubmit={addTodo}/>
            <Todo completeTodo={completeTodo} todos={todos}updateTodo={updateTodo} removeTodo={removeTodo}/>
       
        </div>
    )
}

export default TodoList
 