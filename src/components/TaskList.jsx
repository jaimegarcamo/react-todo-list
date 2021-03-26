// import React, {useState} from 'react'
// import '../App.css'


    
// //     const [task, setTask] = useState("")

// //     function AddNext(){
// //             const tasks = task;
// //             setTask([...task],)
// //     }
    
// //     return (
// //         <div>
// //             <h2 className="task-list-header">Task List:</h2>
// //             <ul className="task-list">
// //                 {tasks.map(title => <li key={title}>{title}</li>)}
// //             </ul>
// //         </div>
// //     )
// // }

// //export default List



// const TaskList = () => {
    
//     const [text, setText] = useState("")
//     const [task, setTask] = useState([])
//     const [number, setNumber] = useState(0)

//     function handleSubmit(event){
//         event.preventDefault()
//         const newTasks = [...task, text];
//         setTask(newTasks)
//         localStorage.setItem("tasks",newTasks)
//         setText("")
//         event.target[0].focus()
//         setNumber(newTasks.length)
        
//     }

    

//     return(
//     <>
//     <form onSubmit={handleSubmit}>
//         <p>Pending Tasks: {number}</p>
//         <br></br>
//         <input placeholder="Insert new task..." name="input-task" value={text} onChange={event => setText(event.target.value)}/>
//         <input type="submit" value="Add" />
//     </form>
//     <ul className="task-list">
//         <h2>{text}</h2>
//         {task.map(title => <li key={title}>{title}</li>)}
//     </ul>

//     </>
//     )
// }

// export default TaskList




import React from 'react'

function TaskList({children}){
    //console.log(children)
    return(
        <ul>
            {children}
        </ul>
    )
}

export default TaskList
