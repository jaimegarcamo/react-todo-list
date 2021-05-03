import React, { useState, useEffect } from "react";
import TaskForm from "../components/TaskForm/TaskForm";
import TaskList from "../components/TaskList/TaskList";
import TaskItem from "../components/TaskItem/TaskItem";
import useLocalStorage from "../hooks/useLocalStorage";
import TaskMessage from "../components/TaskMessage/TaskMessage";
import TaskClearCompleted from "../components/TaskClearCompleted/TaskClearCompleted";
import "../App.scss";
import { useHistory } from "react-router-dom";

import api from "../helper/api";

function TaskListPage(props) {
  const { user } = props;

  const history = useHistory();

  if (!user.name) {
    history.push("/login");
  }

  const [tasks, setTasks] = useLocalStorage("storedTasks", []);

  const [serverTasks, setServerTasks] = useState([]);

  const completedTasksNumber = serverTasks.filter((task) => task.completed)
    .length;
  const pendingTasks = serverTasks.length - completedTasksNumber;

  // useEffect(async() => {
  //   setServerTasks(await api.getAllTasks())
  // }, [])

  useEffect(() => {
    if (pendingTasks === 0 /*&& completedTasksNumber != 0*/) {
      //alert("You don't have any task to complete 🚀")
    }
  }, []);

  useEffect(() => {
    document.title = `${
      serverTasks.length - completedTasksNumber
    } tasks left to do`;
  }, [pendingTasks]);

  //CREATE TASK
  async function handleSubmit(task) {
    const newTasks = [...tasks, task];
    await api.createTask(task).then((response) => console.log(response));
    setServerTasks(await api.getAllTasks());
    setTasks(newTasks);
    document.querySelector("input").focus();
  }

  //DELETE TASK
  async function handleTaskClickDelete(id) {
    const response = await api.deleteTask(id);
    //alert(response.message)
    const tasks = await api.getAllTasks();
    setServerTasks(tasks);

    //const newTasks = tasks.filter(task => task.id !== id)
    //setTasks(newTasks)
  }

  //COMPLETE TASK -> TACHAMOS Y CAMBIAMOS DE COLOR LA TAREA
  async function handleClickComplete(id, completed) {
    await api.patchTask(id, { completed: completed });
    const tasks = await api.getAllTasks();
    setServerTasks(tasks);

    // let taskCompleted = tasks.map(task => {

    //   if(task.id === id){
    //     return {
    //       ...task,
    //       completed: !task.completed
    //     }
    //   }

    //   return task
    // })

    // setTasks(taskCompleted)
  }

  function handleClearCompletedTasks() {
    const incompletedIds = tasks.filter((task) => task.completed === false);
    setTasks(incompletedIds);
  }

  return (
    <div className="App">
      <h1 className="first-title">To Do List</h1>
      <p className="paragraf">
        Pending Tasks: <span className="count-tasks">{pendingTasks}</span>
      </p>
      <p className="paragraf">
        Completed Tasks:{" "}
        <span className="count-tasks">{completedTasksNumber}</span>
      </p>
      <TaskClearCompleted onClick={handleClearCompletedTasks} />
      <br></br>
      <TaskForm onSubmit={handleSubmit} />
      <TaskMessage tasks={tasks.length} />
      <TaskList>
        {serverTasks.map((task) => (
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
  );
}

export default TaskListPage;
