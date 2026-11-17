import React, {Fragment} from "react"
import { useState } from "react"

function App() {
  const [todos, setTodos] = useState([{
    id: 1,
    title: "Learn React",
    description: "Learn React by building a todo app"
  },
{
    id: 2,
    title: "Don't overthink it",
    description: "Don't overthink it, just do it"
},
{
    id: 3,
    title: "Stop oversleeping",
    description: "Stop oversleeping and get started"
}])

function addTodo(){
  const newTodo = {
    id: todos.length + 1,
    title: "New Todo",
    description: "This is a new todo"
  }
  setTodos([...todos, newTodo])

  
}
return (
  <div>
    <button onClick={addTodo}>Add Todo</button>
    {todos.map(todo => <Todo key={todo.title} description={todo.description}/>)}
  </div>
)
  
}

function Todo({title, description}){
  return <div>
    <h1>
      {title}
    </h1>
    <h5>
      {description}
    </h5>
  </div>
}

export default App
