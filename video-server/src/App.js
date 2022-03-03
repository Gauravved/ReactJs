
import './App.css';
import Header from './Components/Header.js';
import { Todos } from './Components/Todos.js';
import Footer from './Components/Footer.js';
import React, { useState, useEffect } from 'react';
import { AddComponents } from './Components/AddComponents';
import { SearchBox } from './Components/SearchBox';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from "react-router-dom";
import { About } from './Components/About'

function App() {
  let initTodo;
  const [searchTitle, setSearchTitle] = useState("");
  const [searchDesc, setSearchDesc] = useState("");
  if (localStorage.getItem("todos") === null) {
    initTodo = [];
  } else {
    initTodo = JSON.parse(localStorage.getItem("todos"));
  }
  let onDelete = (todo) => {
    console.log("I am on todo of ", todo);
    //This deleting does not work in react js it works in angular js
    // let index= todos.indexOf(todo);
    // todos.splice(index,1);
    //Deleting in react
    setTodos(todos.filter((e) => {
      return e !== todo;
    }));
  };
  let b= false
  let search = (title) => {
    let searchs = todos.some((e) => {
      if (e.title.toLowerCase() === title.toLowerCase()) {
        b= true;
        setSearchTitle(e.title);
        setSearchDesc(e.desc);
      }
    });
    
    if(!b){
      setSearchDesc("");
      setSearchTitle("");
    }
  }
  //addingComponents in the array
  const addComponents = (title, desc) => {
    console.log("Add Components clicked");
    let srn;
    if (todos.length === 0) {
      srn = 1;
    }
    else {
      srn = todos[todos.length - 1] + 1;
    }
    let addTodo = {
      srn: srn,
      title: title,
      desc: desc
    }
    setTodos([...todos, addTodo]);
    localStorage.setItem("todos", JSON.stringify(todos));
  };
  //useState is used to update the elements in real time in reactJs, it is a function and the data is passed as parameter
  const [todos, setTodos] = useState(initTodo);
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos))
  }, [todos])

  return (
    <div>
      <Router>
        <Header title="My Todos List" searchBar={true} search={search} />
        <Switch>
          <Route exact path='/' render={() => {
            return (
              <>
                <AddComponents addComponents={addComponents} />
                <Todos todos={todos} onDelete={onDelete} />
              </>
            )
          }}>
          </Route>
          <Route exact path='/about' render={()=>{
            return (
              <>
                <About />
              </>
            )
          }}>
          </Route>
          <Route exact path='/search'>
            <SearchBox searchTitle={searchTitle} searchDesc={searchDesc} onDelete={onDelete} />
          </Route>
        </Switch>

        <Footer />
      </Router>
    </div>
  );
}

export default App;
