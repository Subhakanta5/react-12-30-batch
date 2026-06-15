const User=(props)=>{
    const {data:{username,age,email,bike,video}}=props
    console.log(username);
    
    return (
        <div>
            {
                bike && <img src={bike} alt={username}  width={400}/>
            }
            {
                video && <video src={video} autoPlay muted loop playsInline></video>
            }
           <h1>{username}</h1>
           <hr />
        </div>
    )
}
export default User