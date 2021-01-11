import React from 'react'
import TodoForm from "./Todo-Form"


function Todo() {

    const [edit, setEdit] =useState({
        id:null,
        value:""
    })
    return Todos.map((todo,index)=>{
        <div
        className={todo,isComplete ? "todo-row complete" : "todo-row"}
        key={index}
        >
            <div
            key={todo.id}
            onClick={()=>completeTodo(todo.id)}>
                {todo.text}
            </div>
            <div className="icons">

            </div>
        </div>
    })
} 

export default Todo
