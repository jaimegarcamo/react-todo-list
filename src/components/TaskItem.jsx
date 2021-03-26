import React from 'react'

function TaskItem({id, title, onClick}){
    
    // function handleClick(){
    //     onClick(title)
    // }
    
    return(
        <li onClick={() => onClick(id)}>
            {title}
        </li>
    )
}

export default TaskItem
