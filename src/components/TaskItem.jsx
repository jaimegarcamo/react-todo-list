import React from 'react'
import ToolTip from 'react-tooltip'

function TaskItem({id, title, onClick}){
    
    function handleTooltip(){
        console.log('Tool Tip')
    }
    
    return(
        <>
            <li data-tip data-for='botonTooltip' onClick={() => onClick(id)} onMouseOver={handleTooltip}>
                {title}
            </li>
            <ToolTip type="light" place="right" id='botonTooltip'>Click to remove task</ToolTip>
        </>
    )
}

export default TaskItem
