import React from 'react'

const PendingTasks = () => {
    let tasksLength;
    if(localStorage.getItem("tasks")){
        tasksLength = localStorage.getItem("tasks").split(",").length
    }
    else{
        tasksLength = 0;
    }

    return (
        <div>
            <h3 className="pending-tasks-text">Pending Tasks: {tasksLength}</h3>
        </div>
    )
}

export default PendingTasks
