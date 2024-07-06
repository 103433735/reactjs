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
  const name = "DucNguyenAnh"
  const age = 23
  const data = {
    name: "Duc Nguyen Anh",
    age: 23
  }
  const [todoList, setTodoList] = useState([])

  const addNewToDo = (name) => {
    const newTodo = {
      id: randomNumber(0,99999),
      name: name
    }
    setTodoList([...todoList, newTodo])
  }

  function randomNumber(min,max) {
    return Math.floor(Math.random() * (max-min + 1) + min)
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
     todoList = {todoList}
     ></ToDoData>

    <div className='todo-image'>
      <img src={reactLogo} className='logo'/>
    </div>
    </div>
  )
}

export default App

