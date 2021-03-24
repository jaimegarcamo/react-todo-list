import React from 'react'
import Input from './components/Input.jsx'
import PendingTasks from './components/PendingTasks.jsx'
import ButtonAdd from './components/ButtonAdd.jsx'
import TaskList from './components/TaskList.jsx'
import Counter from './components/Counter.jsx'
import './App.css'


function App() {
  
  function obtainPendingTasks(){
    return 0
  }
  
  return (
    <div className="App">
      <h1 className="first-title">To Do List</h1>
      <PendingTasks pendingTasks={0}/>
      <br></br>
      <p className="insert-new-task">Insert New Task</p>
      <Input />
      <ButtonAdd />
      <br></br>
      <TaskList /> 
      <br></br>
      <Counter defaultValue={0}/>
    </div>
    
  )
}

export default App
