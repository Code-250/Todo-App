import React from 'react'

const Todos = ({todos, deleteTodo}) => {
    const todoList = todos.length ? (
        todos.map(todo =>{
            return(
                <div className ='collection-item' key ={todo.id}>
                    <span onClick={()=>{deleteTodo(todo.id)}}>{todo.content}</span>
                </div>

            )
        })
    ) : (
        <p className='collection-item'>yaay you have finished to days todos add more </p>
    ) ;
    return (
        <div className='todos-collection'>
            {todoList}
        </div>
    )
}

export default Todos
