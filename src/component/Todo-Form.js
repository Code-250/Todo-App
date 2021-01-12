import React,{useState} from "react";


function TodoForm (props){
    const [input, setInput] =useState("")
    const [todos, setTodos]= useState("")
    const handleChange = e=>{
        setInput(e.target.value);
        
    }
    const handleSubmit = e =>{
        e.preventDefault();
        setTodos([
            ...todos,
            {text: input,
            id:Math.random()*1000
            }
        ])
        
       
        setInput("");
        
    }
    console.log(todos)
    return(
        <form 
        className="todo-form"
        onSubmit={handleSubmit}
        >
            <input
            type="text"
            placeholder="Add a todo"
            value={input}
            name="text"
            className="todo-input"
            onChange={handleChange}
            />
            <button className="todo-button">Add Todo</button>
        </form>
    )
}
export default TodoForm;