import User from "./User"

const Props_With_Conditional=()=>{
    let data=[
        {
            username:"sundari",
            age:23,
            email:"sundari@gmail.com",
            bike:"https://cdn.pixabay.com/photo/2014/12/16/03/37/motorcycle-569865_1280.jpg",
        },
        {
            username:"Mala",
            age:24,
            email:"mala@gmail.com",
            bike:null
        },
        {
            username:"Shakila",
            age:30,
            email:"shakila@gmail.com",
            bike:"https://cdn.pixabay.com/photo/2021/01/06/12/32/yamaha-5894293_1280.jpg",
            video:"https://sxcontent9668.azureedge.us/cms-assets/assets/Leading_Launch_Service_Mobile_02email_c06f4154a8.mp4"
        }
    ]
    return (
        <div>
            {
                data.map((ele)=>{
                    return <User data={ele}/>
                })
        }
        </div>
    )
}
export default Props_With_Conditional