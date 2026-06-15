const Conditional_Rendering=()=>{
    //! Conditional rendering
      // 1. ternary operator (condition ? true : false)
      // 2. short circuit logical AND (condition && true)
      // 3. nullish operator (condition is null || undefined ?? true)
      // 4. optional chaining (?)
      // 5. short circuit logical OR (variable = true || default value)

    // let status=null
    let data=[]

    let value=""
    let res= value || 0
    console.log(res);
                
    return (
        <div>
           {/* {
            status === true ? <h1>😆 happy</h1> : <h1>😔 sad</h1> // ternary opertor used 
           }
           {
            status && <h1>Happy 😆😆</h1>  // execute when statement is true
           } 
           {
             status ?? <h1>sad</h1>   //if a varibale need to be a null value and undefined value then executes nullish operator
           } */}
            {
                data?.map(()=>{
                    return <h1>hii</h1>
                })
            }
            <h1>another statement</h1>      
        </div>
    )
}
export default Conditional_Rendering