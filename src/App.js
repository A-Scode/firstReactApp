import logo from './logo.svg';
import './App.css';
import Header from './MynewComponents/webHeader'
import TODOs from './MynewComponents/webTodos'
import Footer from './MynewComponents/webFooter'
import {useState , useEffect} from 'react'
import TodoInput from './MynewComponents/webaddtodo'
import {
  BrowserRouter as Router,
  Switch,
  Link,
  Route
} from 'react-router-dom'
import About from './MynewComponents/About'

function App() {
  
  
  var Newvariable = window.innerHeight

  
  const [todo_list , set_todo_list]=useState( !localStorage.Todos?[]:JSON.parse(localStorage.Todos))
  useEffect(()=>{localStorage.Todos = JSON.stringify(todo_list)}, [todo_list])

  var deleting_todo = (title)=>{
    console.log("delete todo" , title)
    
    set_todo_list(todo_list.filter((item)=>{
      
          return item != title
      
    }))
  }

  var adding_todo =  (my_work)=>{
    
    set_todo_list([...todo_list , my_work])
    
    
  }

  return (
    <Router>
    <Header Mytitle = "TODOs List"  />

    <Switch>

    <Route exact path = "/">
    <div id = "todowrap">
      <TodoInput list = { todo_list} onchange= {(obj) =>{
        
        adding_todo(obj)
        
      }} />
    <TODOs todos = {todo_list} Ondelete = {(title)=>{
      deleting_todo(title)
    }}   />
    </div>
    </Route>

    <Route exact path = "/about">
      <About />
    </Route>


    </Switch>

    <Footer />
    </Router>
    
  );
}

export default App;
