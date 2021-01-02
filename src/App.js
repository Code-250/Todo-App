import React, { Component } from 'react'
import './App.css';
import Todos from './Todos';

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
  render(){
    return (
    <div className="App">
      <h1 className='header'>
        Todo's
      </h1>
      <Todos todos={this.state.todos} deleteTodo={this.deleteTodo}/>
    </div>
  );
}
  }
  

export default App;
 