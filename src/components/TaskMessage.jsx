import React, {useState} from 'react'

function TaskMessage({tasks}){
    //console.log(children)

    const [message, setMessage] = useState("")

    if(tasks === 0){
        setMessage("Your list is empty!")
        return(<h1>{message}</h1>)
    }else
        setMessage("")
        return(<h1></h1>)
}

export default TaskMessage
