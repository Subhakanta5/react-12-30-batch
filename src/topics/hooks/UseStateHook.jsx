import { useState } from "react"

const UseStateHook=()=>{
    // top level
    //! const [initial value update function] = useState(intial value)
     const [count,setCount]= useState(0)     
        const updateCount=()=>{
            setCount(count+1)
        }



    return (
        <div>
            <h1>UseStateHook</h1>
            <h1>{count}</h1>
            <button onClick={updateCount}>Update</button>
        </div>
    )
}
export default UseStateHook