import React from 'react';
import './App.css';
import Header from './Components/Header/Header';
import Form from './Components/Form/Form';
import ToDoContainer from './Components/ToDoContainer/ToDoContainer';
import Filter from './Components/Filters/Filter';
import Search from './Components/Search/Search';
import axios from 'axios';
class App extends React.Component {
  componentDidMount = async() => {
    console.log("CDM");
    var FetchedToDo = await axios.get('https://jsonplaceholder.typicode.com/todos');
    console.log(FetchedToDo.data);
    this.setState({
      toDo: FetchedToDo.data
    })
  }
  state ={
    toDo : [],
    CloneToDo: []
  }
  addToDo = (todo) =>{
    this.setState({
      toDo: [...this.state.toDo, todo]
      // this.setState({
      // todos: this.state.todos.push(todo)
      // })
      // This can't be done because it is not allowed to work on old Array. you have to make new creation !
    })
    this.setState({
      CloneToDo: [...this.state.CloneToDo, todo]
    })
  }
  DeleteItem = (key)=>{
    const FilteredItems = this.state.toDo.filter(item =>
      item.id !== key
      );
    this.setState({
      toDo: [...FilteredItems],
      CloneToDo: [...FilteredItems]
    })
  }
  StatusChange = (key)=>{
    // console.log(key);
      var ChangedToDos = this.state.toDo.map((item) =>{
     if(item.id === key){
       item.status = !item.status
     }
     return item
      })
    this.setState({
      toDo: [...ChangedToDos]
    })
  }

  Filter = (value) =>{
    switch(value){
      case "All":
       {
          const CloneAll = this.state.CloneToDo.filter(item =>{
          if(item.status == true || item.status == false)
          {
           return item;
          }
        })
        // console.log(CloneAll)
       this.setState({
         toDo: [...CloneAll],
       })
        break;
       }
       case "Active":
       {
        const CloneActive = this.state.CloneToDo.filter(item =>{
          if(item.status === false)
          {
           return item;
          }
        })
        // console.log(CloneActive)
       this.setState({
         toDo: [...CloneActive],
       })
        break;
       }
       case "Completed":
       {
        const CloneCompleted = this.state.CloneToDo.filter(item =>{
          if(item.status === true)
          {
           return item;
          }
        })
        // console.log(CloneCompleted)
       this.setState({
         toDo: [...CloneCompleted],
       })
        break;
       }
       default:
       {
         console.log("No Selection")
       }
       break;
    }
  }

  SearchToDo = (value)=>{
    // console.log(value);
    const Search = this.state.CloneToDo.filter(item =>{
      if(item.description.includes(value))
      {
       return item;
      }
    })
   this.setState({
     toDo: [...Search],
   })
  }


  render =() =>{
    return (
      <div className="App">
        <Header/>
        <Form addToDo = {this.addToDo}/>
        <ToDoContainer DeleteItem = {this.DeleteItem} todos = {this.state.toDo} StatusChange = {this.StatusChange}/>
        <Filter Filter = {this.Filter}/>
        <Search SearchToDo = {this.SearchToDo}/>
      </div>
    );
  }

}

export default App;
