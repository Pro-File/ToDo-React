import React from 'react';
import './ToDo.css';

var ToDo = (props) => {
    // console.log(props.toDo)
    return (
        <div>
            <h3 className="item-head">{props.toDo.title} 
            {props.toDo.status ?
             <button className="complete-btn" onClick={()=>{props.StatusChange(props.toDo.id)}}>Completed</button> 
             :
             <button className="active-btn" onClick={()=>{props.StatusChange(props.toDo.id)}}>Active</button> 
            } 
           
            <button className="delete-btn" onClick={()=>{props.Delete(props.toDo.id)}}>Delete</button>
            </h3>
        </div>
    )
}

export default ToDo
