
const Jsx_Task=()=>{
    // const obj={
    //     username:"sundari"
    //     age:23
    // }
    // const {username,age}
    // String
    let name= "Max"
    // number
    let age="24"
    // Boolean
    let patient=false
    // Array
    let arr=["Apple","Orange","Banana","Tomato","Onion"]
    // object
    let phase={season:"summer"}

    
    let user="sundari"

    return (
        
        <div>
            <h2>Name: {name}</h2>
            
            <h2>Age: {age}</h2>

            <h2>Patient: {patient?"student":"parent"}</h2>

            <ol>
                {
                    arr.map((ele)=>{
                    return <li>{ele}</li>
                })
                }
            </ol>
                
            <h2>Season: {phase.season}</h2>

            <h2>{`hello${user}`}</h2>   
                {
                    // template 
                }
        </div>


     )
}
export default Jsx_Task