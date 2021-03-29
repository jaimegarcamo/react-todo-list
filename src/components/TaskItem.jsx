import React, {useState} from 'react'
import TaskDeleteButton from './TaskDeleteButton'
import TaskListDate from './TaskListDate'
import TaskItemText from './TaskItemText'


function TaskItem({id, title, date, onClickDelete, onClickAdd}){
    
    const [style, setStyle] = useState("tasklist-text")

    function handleStyle(){
    
        let newStyle = ""

        if(style === "tasklist-text"){
            newStyle = "tasklist-text-strikethrough"
            setStyle(newStyle)
        }else{
            newStyle = "tasklist-text"
            setStyle(newStyle)
        }

         //onClickDelete(id)
         //onClickAdd({id, title, date, style:newStyle})
    }



    
    return(
        <li className="tasklist-container">
            <div className="tasklist-element" id={style} onClick={handleStyle}><TaskItemText title={title} /></div>
            <div className="tasklist-element" id="tasklist-calendar"><TaskListDate date={date} /></div>
            <div className="tasklist-element" id="tasklist-button"><TaskDeleteButton id={id} onClick={onClickDelete} /></div>
        </li>
    )
}




export default TaskItem

