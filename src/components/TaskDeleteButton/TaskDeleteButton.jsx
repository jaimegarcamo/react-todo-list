import React from 'react'
import ToolTip from 'react-tooltip'

function TaskDeleteButton({id, onClick}){
    
    
    return(
        <>
        <button className="button-delete" data-tip data-for='botonTooltip' onClick={() => onClick(id)}>Remove Task</button>
        <ToolTip type="light" place="right" id='botonTooltip'>Click to remove task</ToolTip>
        </> 
    )
}

export default TaskDeleteButton
