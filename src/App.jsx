import React , {useState} from 'react'
import TaskForm from './components/TaskForm'
import TaskList from './components/TaskList'
import TaskItem from './components/TaskItem'
import './App.css'

const storedTasks = localStorage.getItem("storedTasks")
const initialTasks = storedTasks ? JSON.parse(storedTasks) : []


function App() {
  
  const [tasks, setTasks] = useState(initialTasks)

  
  function handleSubmit(task){
    const newTasks = [...tasks, task]
    setTasks(newTasks)
    localStorage.setItem("storedTasks", JSON.stringify(newTasks))
  }

  function handleTaskClick(id){
    const newTasks = tasks.filter(task => task.id !== id)
    setTasks(newTasks)
    localStorage.setItem("storedTasks", JSON.stringify(newTasks))
  }
  
  return (
    <div className="App">
      <h1 className="first-title">To Do List</h1>
      <p className="paragraf">Pending Tasks: <span className="count-tasks">{tasks.length}</span></p>
      <TaskForm onSubmit={handleSubmit}/>
      <TaskList>
        {tasks.map(task => (
          <TaskItem 
            key={task.id} 
            id={task.id} 
            title={task.title} 
            onClick={handleTaskClick}
          />
        ))}
      </TaskList>
    </div>
    
  )
}

export default App
