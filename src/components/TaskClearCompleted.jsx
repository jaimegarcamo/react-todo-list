import React, {useState} from 'react'
import ToolTip from 'react-tooltip'

function TaskClearCompleted({onClick}){


    return(
        <div className="container-button-clear-completed">
            <button className="button-clear-completed" data-tip data-for='botonClearTooltip' onClick={onClick}>Clear Completed Tasks</button>
            <ToolTip type="light" place="right" id='botonClearTooltip'>Click to clear all completed tasks</ToolTip>
        </div>
    )
}

export default TaskClearCompleted