import React, { Component } from 'react'
import './App.css';
import Todos from './Todos';
import AddTodo from './AddForm';

class App extends Component {
  state={
    todos:[
      {id:1,content:'learning firebase'},
      {id:2, content: 'playing piano'}

    ]
  }
  // function delete
  deleteTodo = (id )=>{
    const todos= this.state.todos.filter(todo=>{
      return todo.id !==id
    });
// setting up a new array of todos
    this.setState({
      todos
    })
  }
  AddTodo = (todo)=>{
    todo.id = Math.random();
    let todos = [...this.state.todos, todo]
    this.setState({
      todos : todos
    })
  }
  render(){
    return (
    <div className="App">
      <h1 className='header'>
        Todo's
      </h1>
      <AddTodo AddTodo={this.AddTodo}/>
      <Todos todos={this.state.todos} deleteTodo={this.deleteTodo}/>
    </div>
  );
}
  }
  

export default App;
 