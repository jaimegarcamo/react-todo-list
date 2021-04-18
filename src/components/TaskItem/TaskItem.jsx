import React, {useState} from 'react'
import TaskDeleteButton from '../TaskDeleteButton/TaskDeleteButton'
import TaskListDate from '../TaskListDate/TaskListDate'
import TaskItemText from '../TaskItemText/TaskItemText'
import '../TaskItem/TaskItem.scss'


function TaskItem({id, title, date, completed, onClickDelete, onClickComplete}){
    
    let style = "tasklist-text"

    if(completed === true){
        style =  "tasklist-text-strikethrough"
    }
    else{
        style = "tasklist-text"
    }

    return(
        <li className="tasklist-container">
            <div className="tasklist-element" id={style} onClick={() => onClickComplete(id)}><TaskItemText title={title} /></div>
            <div className="tasklist-element" id="tasklist-calendar" placeholder="asdf"><TaskListDate date={date} /></div>
            <div className="tasklist-element" id="tasklist-button"><TaskDeleteButton id={id} onClick={onClickDelete} /></div>
        </li>
    )
}




export default TaskItem

