import React from 'react'
import ToolTip from 'react-tooltip'
import '../TaskListDate/TaskListDate.scss'

function TaskListDate({date}){
    
    
    return(
        <>
        <input type="date" className="info-date" data-tip data-for='dateTooltip' value={date} disabled={true}/>
        <ToolTip type="light" place="right" id='dateTooltip'>Task deadline</ToolTip>
        </>
    )
}

export default TaskListDate
