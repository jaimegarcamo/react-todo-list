import React from 'react'
import TaskCompleteButton from './TaskCompleteButton'
import TaskListDate from './TaskListDate'


function TaskItem({id, title, date, onClick}){
    
    
    return(
        <div className="tasklist-container">
            <div className="tasklist-element" id="tasklist-text">
                <li>
                    {title}
                </li>
            </div>
            <div className="tasklist-element" id="tasklist-calendar">
                <TaskListDate date={date} />
            </div>
            {/* <div className="tasklist-element" id="tasklist-date">
                <TaskListDate date={generateTodaysDate()} />
            </div> */}
            <div className="tasklist-element" id="tasklist-button">
                <TaskCompleteButton id={id} onClick={onClick} />
            </div>
        </div>
    )
}




export default TaskItem
