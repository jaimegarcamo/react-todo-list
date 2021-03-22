import React from 'react'
import Input from './components/Input.jsx'
import PendingTasks from './components/PendingTasks.jsx'
import ButtonAdd from './components/ButtonAdd.jsx'
import List from './components/List.jsx'
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
      <List />
    </div>
    
  )
}

export default App
