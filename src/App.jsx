import { useState } from 'react'
import viteLogo from '/vite.svg'
import './App.css'
import './todo/todo.css'
import MyComponent from './learn/MyComponent'
import MySecondComponent from './learn/MySecondComponent'
import { ToDoNew } from './todo/ToDoNew'
import { ToDoData } from './todo/ToDoData'
import reactLogo from './assets/react.svg'
//component = html + css + js
//Chuyen doi sang EC6 arrow function
const App = () => {
  const [count, setCount] = useState(0)
  const name = "DucNguyenAnh"
  const age = 23
  const data = {
    name: "Duc Nguyen Anh",
    age: 23
  }

  const addNewToDo = (name) => {
    alert(`call me ${name}`)
  }

  // addNewToDo()
  return (
    <div className="todo-container">
      <div className='todo-title'>Todo list</div>

    <ToDoNew
    addNewToDo = {addNewToDo}></ToDoNew>
    <ToDoData
     name={name}
     data = {data}
     ></ToDoData>

    <div className='todo-image'>
      <img src={reactLogo} className='logo'/>
    </div>
    </div>
  )
}

export default App

