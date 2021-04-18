import React from 'react'
import '../TaskMessage/TaskMessage.scss'


function TaskMessage({tasks}){

    let message = ""
    
    if(tasks === 0){
       message = "Your list is empty!"
    }
    else{
        message = "You've work to do:"
    }

    return <h1 className="task-message">{message}</h1>
}

export default TaskMessage
