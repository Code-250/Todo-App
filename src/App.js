import React,{useState} from 'react'
import './App.css';
import Form from './Form'
import TodoList from './TodoList'
function App (){
  const [inputText, setInputText]=useState();
  const [todos, setTodos] = useState([])
   return(
     <div className="App">
       <header>
         <h1>hello</h1>
         <Form 
         inputText={inputText} 
         todos={todos} 
         setTodos={setTodos} 
         setInputText={setInputText}/>
         <TodoList  setTodos={setTodos} stodos={todos} />
       </header>
     </div>
   )
} 

export default App;
 