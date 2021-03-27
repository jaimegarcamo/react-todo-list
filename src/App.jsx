import React , {useState} from 'react'
import TaskForm from './components/TaskForm'
import TaskList from './components/TaskList'
import TaskItem from './components/TaskItem'
import useLocalStorage from './hooks/useLocalStorage'
import TaskMessage from './components/TaskMessage'
import './App.css'



function App() {
  
  const [tasks, setTasks] = useLocalStorage("storedTasks", [])

  
  function handleSubmit(task){
    const newTasks = [...tasks, task]
    setTasks(newTasks)
  }

  function handleTaskClick(id){
    const newTasks = tasks.filter(task => task.id !== id)
    setTasks(newTasks)
  }
  
  return (
    <div className="App">
      <h1 className="first-title">To Do List</h1>
      <p className="paragraf">Pending Tasks: <span className="count-tasks">{tasks.length}</span></p>
      <TaskForm onSubmit={handleSubmit}/>
      {tasks.length === 0  ? <div><br></br><h1 className="task-message">Your list is empty!!</h1></div> : <div><br></br><h1 className="task-message">You've work to do:</h1></div>}
      <TaskList >
        {tasks.map(task => (
          <TaskItem 
            key={task.id} 
            id={task.id} 
            title={task.title} 
            date={task.date}
            onClick={handleTaskClick}
          />
        ))}
      </TaskList>
    </div>
    
  )
}

export default App


