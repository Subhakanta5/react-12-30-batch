const Card=(props)=>{
    console.log(props);  // {user:{username:"sundari"}}
    
    return (
        <div>
            <h1>My Name is {props.user.username}</h1>
            <h1>My Age is {props.user.age}</h1>
            <h1>My Gender is {props.user.gender}</h1>
            <h1>My Email is {props.user.email}</h1> 
        </div>
    )
}
export default Card 