import './todo.css'
const ToDoData = (props) => {
    //Object destructuring --> lay data co trong props. Props la 1 object. Nen khi goi ra, chung ta co the de khuyet danh
    const {todoList} = props
    return(
        <div className='todo-data'>
          {todoList.map((item, index) => {
            return(
              <>
                <div className="todo-item">
                  {item.name}
                  <button>Delete</button>
                  </div>
              </>
            )
          })}
          {/* <div>Learning React</div> */}
          {/* <div>Learning Objective-C</div> */}
          {/* <div>{JSON.stringify(props.todoList)}</div> */}
      </div>
    )
}
export {ToDoData}