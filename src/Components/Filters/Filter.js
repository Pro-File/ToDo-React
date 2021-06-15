import React from 'react'
import './Filter.css'

var Filter = (props)=> {
        return (
            <div>
                <button className="All" onClick={()=>{props.Filter("All")}}>All</button>
                <button className="Active" onClick={()=>{props.Filter("Active")}}>Active</button>
                <button className="Completed" onClick={()=>props.Filter("Completed")}>Completed</button>
            </div>
        )
    
}

export default Filter
