import React from 'react'
import ToolTip from 'react-tooltip'

function TaskItem({id, title, onClick}){
    
    
    return(
        <>
            <li data-tip data-for='botonTooltip' onClick={() => onClick(id)}>
                {title}
            </li>
            <ToolTip type="light" place="right" id='botonTooltip'>Click to remove task</ToolTip>
        </>
    )
}

export default TaskItem
