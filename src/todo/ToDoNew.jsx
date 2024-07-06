const ToDoNew = (props) => {
  const {addNewToDo} = props
    return(
        <div className='todo-new'>
        <input type="text"/>
        <button onClick={addNewToDo("Duc")}>Add</button>
      </div>
    )
}
export {ToDoNew}