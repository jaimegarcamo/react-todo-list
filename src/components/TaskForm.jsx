import React, {useState} from 'react'
import {generateId} from '../utils/generateId'
import { generateTodaysDate } from '../utils/generateTodaysDate'

function TaskForm({onSubmit}){

    const [title, setTitle] = useState("")
    const [error, setError] = useState("")
    const [date, setDate] = useState("")

    function handleInput(event){
        const newText = event.target.value
        setTitle(newText)
        if(error && newText){
            setError("")
        }
    }

    function handleDate(event){
        const newDate = event.target.value
        setDate(newDate)
        if(error && newDate){
            setError("")
        }
    }

    function handleSubmit(event){
        event.preventDefault()
        if(title && date){
            onSubmit({
                id: generateId(),
                title,
                date
            })
            setTitle("")
            setError("")
            setDate("")
        }
        else if (!title && !date){
            setError("Your task cannot be empty")
        }
        else if (title && !date){
            setError("Your task date cannot be empty")
        }
        else{
            setError("Your task title cannot be empty")
        }

    }

    return(
        <form className='task-form' onSubmit={handleSubmit}>
            <input className="input-task" placeholder="Insert new task" type="text" value={title} onChange={handleInput}/>
            <input className="input-date" type="date" value={date} onChange={handleDate}/>
            <br></br>
            <button className="button-add" type="submit">Add</button>
            {error && <p className="error">{error}</p>}
        </form>
    )
}

export default TaskForm