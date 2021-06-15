import React from 'react'
import ToDo from './../ToDo/ToDo';
import './ToDoContainer.css';

var ToDoContainer = (props) => {
    // console.log(props.todos)
    return (
        <div className="To-Do-Container">
            
            {props.todos.map((todo) =>
                <ToDo key={todo.id} toDo = {todo} Delete = {props.DeleteItem} StatusChange = {props.StatusChange}/>
            )}
        </div>
    )
}

export default ToDoContainer;
