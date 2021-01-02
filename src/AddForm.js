import React from 'react'

class AddTodo extends React.Component {

    state ={
        content:''
    }
    handleChange = (e)=>{
        this.setState({
            content:e.target.value
        })
    }
    handleSubmit = (e)=>{
        e.preventDefault();
        this.props.AddTodo(this.state)
        this.setState({
            content:""
        })
    }
    render(){
        
        return(
            <div className='todo-input'>
                <form className='input-form'
                 onSubmit={this.handleSubmit}
                 >
                    <label className='input-title'>
                        Add New Todo:
                    </label>
                    <input className='input-field'type='text'
                     onChange={this.handleChange} 
                     value={this.state.content}
                     />
                </form>
            </div>
        )
    }
}

export default AddTodo;