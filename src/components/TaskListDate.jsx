import React from 'react'
import ToolTip from 'react-tooltip'

function TaskListDate({date}){
    
    
    return(
        <>
        <input type="date" className="info-date" data-tip data-for='botonTooltipDate' value={date} disabled="true"/>
        <ToolTip type="light" place="right" id='botonTooltipDate'>Task Date</ToolTip>
        </> 
    )
}

export default TaskListDate
