import React , {useState, useEffect} from 'react'
import TaskForm from './components/TaskForm/TaskForm'
import TaskList from './components/TaskList/TaskList'
import TaskItem from './components/TaskItem/TaskItem'
import useLocalStorage from './hooks/useLocalStorage'
import TaskMessage from './components/TaskMessage/TaskMessage'
import TaskClearCompleted from './components/TaskClearCompleted/TaskClearCompleted'
import './App.scss'



function App() {
  
  const [tasks, setTasks] = useLocalStorage("storedTasks", [])


  const completedTasksNumber = tasks.filter(task => task.completed).length
  const pendingTasks = tasks.length - completedTasksNumber  


  useEffect(() => {
    if(pendingTasks === 0 /*&& completedTasksNumber != 0*/){
      alert("You don't have any task to complete 🚀")
    }
  }, [])


  useEffect(() => {
    document.title = `${tasks.length - completedTasksNumber} tasks left to do`
  }, [pendingTasks])

  
  function handleSubmit(task){
    const newTasks = [...tasks, task]
    setTasks(newTasks)
    document.querySelector("input").focus()
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


  function handleClearCompletedTasks(){
    const incompletedIds = tasks.filter(task => task.completed === false)
    setTasks(incompletedIds)
  }


  
  return (
    <div className="App">
      <h1 className="first-title">To Do List</h1>
      <p className="paragraf">Pending Tasks: <span className="count-tasks">{pendingTasks}</span></p>
      <p className="paragraf">Completed Tasks: <span className="count-tasks">{completedTasksNumber}</span></p>
      <TaskClearCompleted onClick={handleClearCompletedTasks} />
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


