const Jsx_Rules=()=>{
 // we can write all js code
 let username="Sundari"

    if(false){
        console.log("true block");
        
    }
    else{
        console.log("false block");
        
    }
    let theme=false

    let arr=["sheela","leela","mala","shakila","urmila","madhubala","Sharmila","shusila"]

    return (
        <div>
          {
            // jsx expression
            // we can access the js code but we can't create the js

            // Rules
            //1. We can't declare js variables but we can access it 
            // let remo="hii"
            //2. we can't use conditional statements like if, if-else, else-if, switch
            //3. We can't use loop like for, while, do-while, for-in, for-of
            
          }
            <h1>Hello{username}</h1>

            <button>{theme?"light":"Dark"}</button>

            {/* {
                arr.map((ele)=>{
                    return (
                        <h1>{ele}</h1>
                    )
                })
            } */}
            
            <ol>
                {
                    arr.map((ele)=>{
                        return <li>{ele}</li>
                    })
                }
            </ol>
            
        </div>
    )
    
}
export default Jsx_Rules