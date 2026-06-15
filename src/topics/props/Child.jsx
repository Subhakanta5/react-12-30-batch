
const Child=(props)=>{
    // console.log(props.name);

    const{name="default value"}=props

    return (

        <div>
            <h1>Your name is {name.toUpperCase()}</h1>
        </div>
    )
}
export default Child