import "./TaskUser.css"

const TaskUser=({data})=>{
    const {title,desc,btntext,imgurl,videourl,launchdate,position,classname}=data
    
    return (
      <section className={`hero ${classname}`}>
      {
       videourl && (<video className="bgvideo" src={videourl} muted autoPlay loop playsInline/>)
      }

      {
      imgurl && (<img className="bgimage" src={imgurl} alt={title}/>)
      }

      <div className="overbody"></div>

      <div className={`content ${position}`}>
        {
        launchdate && <p className="launchdate">{launchdate}</p>
        }
        
        <h1>{title}</h1>
        {
        desc && <p className="desc">{desc}</p>
        }
        <button>{btntext}</button>
      </div>
      
    </section>
    
    
    )
}
export default TaskUser