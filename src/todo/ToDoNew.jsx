const ToDoNew = (props) => {
  const {addNewToDo} = props
  const handleClick = () => {
    alert("Click me")
  }
  const handleOnChange = (name) => {
    console.log("Changing...", name)
  }
    return(
        <div className='todo-new'>
        <input onChange={(event) => handleOnChange(event.target.value)} type="text"/>
        <button onClick={handleClick}>Add</button>
      </div>
    )
}
export {ToDoNew}