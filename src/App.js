import React, {useState} from 'react';
import FruitForm from './components/FruitForm';
import TodoForm from './components/TodoForm';
import TodoDisplay from './components/TodoDisplay';
import './App.css';

function App() {

  const [newTask, setNewTask] = useState([]);


  const addNewTask = ( addTask ) => {
    setNewTask([...newTask, addTask]);
  }

  const deleteCurrentTask = ( deleteTask ) => {
    const newTaskList = newTask.filter((task) => task != deleteTask);
    setNewTask(newTaskList);
  }
  return (
    <>

    <div className = 'App'>
      <TodoForm onNewTask = { addNewTask }/>

    
      
    </div>
    <div className = 'display'>
      {
          newTask.map((task, index) => (
            <TodoDisplay deleteNewTask = { deleteCurrentTask } key = {index} task = {task} />
          ))
      }
    </div>
    </>
  
  );
}

export default App;
