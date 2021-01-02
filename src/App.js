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
  render(){
    return (
    <div className="App">
      <h1 className='header'>
        Todo's
      </h1>
      <Todos todos={this.state.todos}/>
    </div>
  );
}
  }
  

export default App;
 