import React, { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import {InputField} from './components/InputField'
import { Todos } from './components/model'
import {TodoList} from './components/TodoList'


//interface
// interface Person{
//   name:string,
//   age?:number
// }

// type X={
//   s: string,
//   t: Date
// }

// type Y = X &{
// ...
// }

// interface z extends Person{

// }

const App:React.FC=()=> {
  const [todo,setTodo] =useState <string> ("");
  const [todos,setTodos] = useState<Todos[]>([]);
  
  const handleAdd=(e:React.FormEvent)=>{
    e.preventDefault();
    if(todo){
      setTodos([...todos,{id:Date.now(),todo:todo,isDone:false}]);
      setTodo("");
    }
  }
  console.log(todos);
  return (
    <div className="App">
      <span>
        TASKIFY
      </span>
      <InputField todo={todo} setTodo={setTodo} handleAdd={handleAdd}/>
      <TodoList todos={todos} setTodos={setTodos}></TodoList>
      
    </div>
  )
}

export default App
