import React from 'react'
import Todo from './Todo'; 

const TodoList = () => {
    return (
        <div className = 'todo-contaier'>
            <ul className='todo-list'>
                <Todo/>
            </ul>
        </div>
    )
}

export default TodoList
 