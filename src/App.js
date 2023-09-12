import React, {useState} from 'react';
import FruitForm from './components/FruitForm';
import TodoForm from './components/TodoForm';
import './App.css';

function App() {

  const [newTask, setNewTask] = useState([]);


  const addNewTask = ( addTask ) => {
    if(addTask == '') return;
    const taskToAdd = { text: addTask, checked: false}; //setting properties to each item added
    // text property and checked property
    setNewTask([...newTask, taskToAdd]);
  }



  const deleteCurrentTask = (index) => {

    const newTaskList = newTask.filter((_, i) => i != index);
    // (represented by _, which is a convention used when you don't intend to use the parameter) 
    // and the index of the current element in the array (represented by i).
    // If the condition i != index is true for an element, 
    // it will be included in the newTaskList array.
    // basically filter to only what isnt i == index
    setNewTask(newTaskList);


  }

  const handleCheck = (index) => {
    const updatedItems = [...newTask]; //copying list
    updatedItems[index].checked = !updatedItems[index].checked; //negates current value of checked property
    //if it was true, it becomes false, false to true
    setNewTask(updatedItems);
  }
  
  return (
    <>
    <h1 className = 'header'>
      To do List:
    </h1>

    <div className = 'App'>
      <TodoForm onNewTask = { addNewTask }/>

    
      
    </div>
    <div className = 'display'>
      {
          newTask.map((task, index) => (
            <div key = {index} style = {{ textDecoration: task.checked ? 'line-through' : 'none'}}>
              <span>
              {task.text}
              </span>
              <label className = 'checkBox'>
                <input checked = {task.checked} type = "checkbox" onChange= {() => handleCheck(index)}/>
                <button type = "button" className = 'delete' onClick={() => deleteCurrentTask(index)}>
                Delete
                </button>
              </label>
              

            </div>
          
          ))
      }
    </div>
    </>
  
  );
}

export default App;
