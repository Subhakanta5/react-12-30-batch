import { useState } from "react"
import Child from "./Child"

const UseStateHook=()=>{
    // top level
    //! const [initial value update function] = useState(intial value)
     const [count,setCount]= useState(0)   

        const updateCount=()=>{
            setCount(count+1)
        }
        console.log("Parent Component");
        

    // let  res="hello"
    // const fetchData=async()=>{
    //     const data=await fetch("https://api.github.com/users")
    //     const res=await data.json()
    //     console.log(res);
    // }
    // console.log(res);

    // fetchData()
    


    return (
        <div>
            <h1>UseStateHook</h1>
            <h1>{count}</h1>
            <Child/>
            <button onClick={updateCount}>Update</button>
        </div>
    )
}
export default UseStateHook