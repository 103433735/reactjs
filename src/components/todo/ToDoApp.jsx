import { useState } from 'react'
import './todo.css'
import MyComponent from '../learn/MyComponent'
import MySecondComponent from '../learn/MySecondComponent'
import { ToDoNew } from './ToDoNew'
import { ToDoData } from './ToDoData'
import reactLogo from '../../assets/react.svg'

const ToDoApp = () => {
    const name = "DucNguyenAnh"
    const age = 23
    const data = {
        name: "Duc Nguyen Anh",
        age: 23
    }
    const [todoList, setTodoList] = useState([])

    const addNewToDo = (name) => {
        const newTodo = {
            id: randomNumber(0, 99999),
            name: name
        }
        setTodoList([...todoList, newTodo])
    }

    const removeItem = (id) => {
        const todoListCache = todoList.filter(item => item.id !== id)
        setTodoList(todoListCache)
        // todoListCache.map((item) => {
        //   if (id == item.id) {
        //     todoListCache.filter((item) => {})
        //   }
        //   setTodoList(todoListCache)
        // })
    }

    function randomNumber(min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min)
    }
    // addNewToDo()
    return (
        <div className="todo-container">
            <div className='todo-title'>Todo list</div>

            <ToDoNew
                addNewToDo={addNewToDo}
            ></ToDoNew>

            {todoList.length > 0
                ? <ToDoData
                    name={name}
                    data={data}
                    todoList={todoList}
                    removeItem={removeItem}
                ></ToDoData> : <div className='todo-image'>
                    <img src={reactLogo} className='logo' />
                </div>}

            {/* <ToDoData
     name={name}
     data = {data}
     todoList = {todoList}
     ></ToDoData>
  
    {todoList.length == 0 &&
    <div className='todo-image'>
      <img src={reactLogo} className='logo'/>
    </div>
    } */}
        </div>
    )
}
export default ToDoApp