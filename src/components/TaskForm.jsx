import React, {useState} from 'react'
import {generateId} from '../utils/generateId'

function TaskForm({onSubmit}){

    const [title, setTitle] = useState("")
    const [error, setError] = useState("")

    function handleInput(event){
        const newText = event.target.value
        setTitle(newText)
        if(error && newText){
            setError("")
        }
    }

    function handleSubmit(event){
        event.preventDefault()
        if(!title){
            setError("Your task title cannot be empty")
        }
        else{
            onSubmit({
                id: generateId(),
                title
            })
            setTitle("")
            setError("")
        }

    }

    return(
        <form className='task-form' onSubmit={handleSubmit}>
            <input className="input-task" placeholder="Insert new task" type="text" value={title} onChange={handleInput}/>
            <button className="button-add" type="submit">Add</button>
            {error && <p className="error">{error}</p>}
        </form>
    )
}

export default TaskForm