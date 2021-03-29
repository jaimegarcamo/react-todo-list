import React from 'react'
import TaskCompleteButton from './TaskCompleteButton'
import TaskListDate from './TaskListDate'


function TaskItem({id, title, date, onClick}){
    
    
    return(
        <li className="tasklist-container">
            <div className="tasklist-element" id="tasklist-text">{title}</div>
            <div className="tasklist-element" id="tasklist-calendar"><TaskListDate date={date} /></div>
            <div className="tasklist-element" id="tasklist-button"><TaskCompleteButton id={id} onClick={onClick} /></div>
        </li>
    )
}




export default TaskItem



{/* <div className="tasklist-container">
            <div className="tasklist-element" id="tasklist-text">
                <li>
                    {title}
                </li>
            </div>
            <div className="tasklist-element" id="tasklist-calendar">
                <TaskListDate date={date} />
            </div>
            <div className="tasklist-element" id="tasklist-button">
                <TaskCompleteButton id={id} onClick={onClick} />
            </div>
        </div> */}