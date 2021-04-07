import React , {useState} from 'react'
import TaskForm from './components/TaskForm'
import TaskList from './components/TaskList'
import TaskItem from './components/TaskItem'
import useLocalStorage from './hooks/useLocalStorage'
import TaskMessage from './components/TaskMessage'
import './App.css'



function App() {
  
  const [tasks, setTasks] = useLocalStorage("storedTasks", [])



  const completedTasksNumber = tasks.filter(task => task.completed).length
  

  
  function handleSubmit(task){
    const newTasks = [...tasks, task]
    setTasks(newTasks)
  }


  function handleClickComplete(id){
    let taskCompleted = tasks.map(task => {
      
      if(task.id === id){
        return {
          ...task,
          completed: !task.completed
        }
      }

      return task
    })
    
    setTasks(taskCompleted)
  }


  function handleTaskClickDelete(id){
    const newTasks = tasks.filter(task => task.id !== id)
    setTasks(newTasks)
  }


  
  return (
    <div className="App">
      <h1 className="first-title">To Do List</h1>
      <p className="paragraf">Pending Tasks: <span className="count-tasks">{tasks.length - completedTasksNumber}</span></p>
      <p className="paragraf">Completed Tasks: <span className="count-tasks">{completedTasksNumber}</span></p>
      <TaskForm onSubmit={handleSubmit}/>
      <TaskMessage tasks={tasks.length} />
      <TaskList >
        {tasks.map(task => (
          <TaskItem 
            key={task.id} 
            id={task.id} 
            title={task.title} 
            date={task.date}
            completed={task.completed}
            onClickDelete={handleTaskClickDelete}
            onClickComplete={handleClickComplete}
          />
        ))}
      </TaskList>
    </div>
    
  )
}

export default App


