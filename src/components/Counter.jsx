import React, {useState} from 'react'

const Counter = ({defaultValue}) => {
    const [count, setCount] = useState(defaultValue);

    function increment(){
        setCount(count + 1)
    }


    return (
           <button onClick={increment}>
               {count === 0 ? "Did not click yet" : `Clicked ${count}`}
            </button> 
    )
}

export default Counter
