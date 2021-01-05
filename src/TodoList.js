import React from 'react'
import Todo from './Todo'; 

const TodoList = ({todos, todo, setTodos }) => {

    return (
        <div className = 'todo-contaier'>
            <ul className='todo-list'>
                 {todos.map((todo)=>(
                     <Todo setTodos={setTodos} 
                     key ={todo.id} 
                     todo={todo}
                     todos={todos}
                     text={todo.text}/>
                 ))}
            </ul>
        </div>
    )
}

export default TodoList
 