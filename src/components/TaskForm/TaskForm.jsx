import React, {useState} from 'react'
import {generateId} from '../../utils/generateId'
import { generateTodaysDate } from '../../utils/generateTodaysDate'
import ToolTip from 'react-tooltip'
import '../TaskForm/TaskForm.scss'


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
                date,
                completed: false
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
            <input className="input-date" type="date" min={generateTodaysDate()} value={date} onChange={handleDate}/>
            <button className="button-add" data-tip data-for='botonAddTooltip' type="submit">Add</button>
            <ToolTip type="light" place="right" id='botonAddTooltip'>Click to Add new task</ToolTip>
            {error && <p className="error">{error}</p>}
        </form>
    )
}

export default TaskForm