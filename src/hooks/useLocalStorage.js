import {useState} from 'react'

function useLocalStorage(key,defaultValue){
   
    const [state, setState] = useState( () => {
        const stored = localStorage.getItem(key)
        return stored ? JSON.parse(stored) : defaultValue
    })

    function setLocalState(newState){
        setState(newState)
        localStorage.setItem(key, JSON.stringify(newState))
    }

    return[state, setLocalState]
}

export default useLocalStorage