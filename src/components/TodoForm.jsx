import React, {useState}  from 'react'



export const TodoForm = (props) => {
  const [task, setTask] = useState("");

  const createTask = (e) => {
    e.preventDefault();


    props.onNewTask(task);

    //

    setTask("");

  };



  return (
    <div>
      <form onSubmit = {createTask}>
          <div>
            <input type = "text" className = 'input-box' value = {task} onChange = {e => setTask(e.target.value)}/>

          </div>
          <div>
          <input type = "submit" className = 'input' value = "Add"/>
          </div>
      </form>



    </div>
  )
}


export default TodoForm;