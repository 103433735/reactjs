const ToDoData = (props) => {
    //Object destructuring --> lay data co trong props. Props la 1 object. Nen khi goi ra, chung ta co the de khuyet danh
    const {name, age, data} = props
    return(
        <div className='todo-data'>
        <div>My name is {name}</div>
        <div>My name is {age}</div> 
        <div>Learning React</div>
        <div>Learning Objective-C</div>
      </div>
    )
}
export {ToDoData}