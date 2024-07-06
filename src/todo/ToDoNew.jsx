import { useState } from "react"

const ToDoNew = (props) => {
  const {addNewToDo} = props

  //useState hook
  //const valueInput = ""
  const [valueInput, setValueInput] = useState("") 
  
  const handleClick = () => {
    addNewToDo(valueInput)
  }
  const handleOnChange = (name) => {
    console.log("Changing...", name)
    setValueInput(name)
  }
    return(
      <>
       <div className='todo-new'>
        <input 
          onChange={(event) => handleOnChange(event.target.value)}
          value={valueInput} 
          type="text"/>
        <button onClick={handleClick}>Add</button>
        </div>
      </>

    )
}
export {ToDoNew}