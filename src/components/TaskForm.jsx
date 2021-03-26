import React, {useState} from 'react'
import {generateId} from '../utils/generateId'

function TaskForm({onSubmit}){

    const [title, setTitle] = useState("")
    const [error, setError] = useState(null)

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
        <form onSubmit={handleSubmit}>
            <input placeholder="Insert new task" type="text" value={title} onChange={handleInput}/>
            <button type="submit">Add</button>
            {error && <p style={{color: 'red'}}>{error}</p>}
        </form>
    )
}

export default TaskForm