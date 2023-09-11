import React, {useState} from 'react'


export const TodoDisplay = ({task}, props) => {
  

  const [isComplete, setIsComplete] = useState(false);

  const deleteTask = (e) =>  {
    e.preventDefault();
    // isComplete ? 
    props.deleteNewTask({task});
    // :

  }

  return (
    <form onSubmit = {deleteTask}>
        <div className = 'display'>
            {task} 
            <label className = 'checkBox'>
                <input type = "checkbox" checked = {isComplete} onChange = {e => setIsComplete(e.target.checked)}/>
                <button className = 'delete'>Delete</button>
            </label>
        </div>

    </form>
  )
}

export default TodoDisplay