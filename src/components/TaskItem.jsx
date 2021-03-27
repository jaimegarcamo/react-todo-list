import React from 'react'

function TaskItem({id, title, onClick}){
    
    function handleTooltip(){
        console.log("HOLA")
    }
    
    return(
        <li onClick={() => onClick(id)} onMouseOver={handleTooltip}>
            {title}
        </li>
    )
}

export default TaskItem
