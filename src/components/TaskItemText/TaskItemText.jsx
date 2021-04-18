import React from 'react'
import ToolTip from 'react-tooltip'
import '../TaskItemText/TaskItemText.scss'

function TaskItemText({title}){
    
    
    return(
        <>
        <span className="info-input" data-tip data-for='textTooltip'>{title}</span>
        <ToolTip type="light" place="right" id='textTooltip'>Click to complete / uncomplete task</ToolTip>
        </> 
    )
}

export default TaskItemText
