import React from 'react';
import './Form.css';

class Form extends React.Component {
    state ={
        todoInput : "",
    }
    changeInput = (e) =>{
        var value = e.target.value;
        // console.log(value);
        // This is Getting the Typed Value to let React know about the change !
        this.setState({
            todoInput : value,
        });
    }
    Submit = (e) =>{
        e.preventDefault();
        var toDoObj = {
            title : this.state.todoInput,
            completed: false,
            id: Date.now(),
        }
        this.props.addToDo(toDoObj)
        var inp = document.getElementById('InputTag');
        inp.value = "";
    }
    render = () => {
        return(
        <div>
            <form onSubmit = {this.Submit}>
                <input id= "InputTag" onChange={(e) =>{
                    return this.changeInput(e)
                    // 'e' ki value by default function mai call hojati hai zarorat parne pr!
                }}
                    value={this.state.todoInput} type="text" placeholder="Enter Task"></input>
                    <button className="add-btn">ADD</button>
            </form>
        </div>
    
        );
    
    }
}

export default Form;
