import './todo.css'
const ToDoData = (props) => {
    //Object destructuring --> lay data co trong props. Props la 1 object. Nen khi goi ra, chung ta co the de khuyet danh
    const {todoList,removeItem} = props

    const handleRemoveItem = (id) => {
        removeItem(id)
    }
    return(
        <div className='todo-data'>
          {todoList.map((item, index) => {
            return(
                <div className="todo-item" key = {item.id}>
                  <div>{item.name}</div>
                  <button onClick={() => handleRemoveItem(item.id)}>Delete</button>
                </div>
            )
          })}
          {/* <div>Learning React</div> */}
          {/* <div>Learning Objective-C</div> */}
          {/* <div>{JSON.stringify(props.todoList)}</div> */}
      </div>
    )
}
export {ToDoData}