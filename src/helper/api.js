const API_URL = 'http://localhost:3001';
const headers = {
    'Content-Type': 'application/json'
};

//POST
const createTask = async (data) => {
    return await fetch(`${API_URL}/task`, {
        method: 'POST',
        mode: 'cors',
        headers,
        body: JSON.stringify({data}), //Le pasamos un objeto con data dentro, para que lo que obtenga el servidor sea un objeto 
    })
    .then(response => response.json())

}

//GET
const getAllTasks = async() => {
    return await fetch(`${API_URL}/task`, {
        method: 'GET',
        mode: 'cors',
    })
    .then(response => response.json())
}


//DELETE
const deleteTask = async (taskId) => {
    return await fetch(`${API_URL}/task/${taskId}`, {
        method: 'DELETE',
        mode: 'cors',
    })
    .then(response => response.json())
}

//PATCH
const patchTask = async (taskId, data) => {
    return await fetch(`${API_URL}/task/${taskId}`, {
        method: 'PATCH',
        mode: 'cors',
        headers,
        body: JSON.stringify({data}), //Le pasamos un objeto con data dentro, para que lo que obtenga el servidor sea un objeto 
    })
    .then(response => response.json())
}


// const clearCompleted = () => {
//     return await fetch(`${API_URL}/task`, {
//         method: 'POST',
//         mode: 'cors',
//         })
//     .then(response => response.json())
// }



export default {
    createTask,
    getAllTasks,
    deleteTask,
    patchTask
}