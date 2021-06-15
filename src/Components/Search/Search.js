import React from 'react'
import './Search.css';

class Search extends React.Component{
   
    render=()=>{

        return (
            <div>
                <input className="search" placeholder="Search here" onChange={(e)=>{this.props.SearchToDo(e.target.value)}}></input>
            </div>
        )
    }
    
}

export default Search
