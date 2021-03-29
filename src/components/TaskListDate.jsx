import React from 'react'
import ToolTip from 'react-tooltip'

function TaskListDate({date}){
    
    
    return(
        <input type="date" className="info-date" value={date} disabled={true}/>
    )
}

export default TaskListDate
