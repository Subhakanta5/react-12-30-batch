import Card from "./Card";

const PropsTask=()=>{

    const data=[
        {
            username:"sundari",
            age:23,
            gender:"female",
            email:"sundari@gmail.com",
            img:""
        },
         {
            username:"sheela",
            age:23,
            gender:"female",
            email:"sheela@gmail.com",
            img:""
        },
         {
            username:"leela",
            age:23,
            gender:"female",
            email:"leela@gmail.com",
            img:""
        },
       
    ]

    console.log(data[0]);
    console.log(data[1]);
    console.log(data[2]);
    

    return (
        <div>
            {/* <h1>Props Task</h1> */}
            {/* <Card user={data[0]} />
            <Card user={data[1]} />
            <Card user={data[2]} /> */}
            
            <table border="1">
                <tr>
                    <th>Id</th>
                    <th>UserName</th>
                    <th>Age</th>
                </tr>
                {
                    data.map((ele,index)=>{
                        return <tr>
                            <td>{index+1}</td>
                            <td>{ele.username}</td>
                            <td>{ele.age}</td>
                        </tr>
                    })
                }
            </table>

        </div>
    )
}
export default PropsTask