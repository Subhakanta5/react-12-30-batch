import User from "./TaskUser"


const Task_Props_With_Conditional=()=>{
    let data=[
        {
            id:1,
            title:"Starship's Twelfth Flight Test",
            desc:"",
            btntext:"Watch →",
            imgurl:"",
            videourl:"https://sxcontent9668.azureedge.us/cms-assets/assets/20260522_Starship_Flight12_web1920_v2_71d68b5ee9.mp4",
            launchdate:"MAY 22, 2026",
            position:"left",
            classname:"flight"
        },
        {
            id:2,
            title:"Making life multiplanetary",
            desc:"SpaceX was founded under the belief that a future where humanity is out exploring the stars is fundamentally more exciting than one where we are not.",
            btntext:"Explore →",
            videourl:"https://sxcontent9668.azureedge.us/cms-assets/assets/Mars_Rotation_Web_HB_d96299f9de.mp4",
            position:"left",
            classname:"mars"
        },
        {
            id:3,
            title:"Revolutionizing space technology",
            desc:"SpaceX’s Starship spacecraft and Super Heavy rocket is a fully reusable transportation system designed to carry both crew and cargo to Earth orbit, the Moon, Mars, and beyond.",
            btntext:"Learn More →",
            imgurl:"https://sxcontent9668.azureedge.us/cms-assets/assets/Revolutionizing_Space_Tech_Desktop_ec67ad03c2.jpg",
            position:"right",
            classname:"rocket"
        },
        {
            id:4,
            title:"World’s leading launch service provider",
            desc:"SpaceX leads the world in launches with its reliable, reusable rockets and is developing the fully and rapidly reusable rockets necessary to transform humanity’s ability to access space into something as routine as air travel.",
            btntext:"Reserve Your Ride →",
            videourl:"https://sxcontent9668.azureedge.us/cms-assets/assets/Space_X_Falcon_Heavy_UAS_Landing_DESKTOP_compress_b4568daf9c_5e2026727a.mp4",
            position:"left",
            classname:"rocket2"
        },
        {
            id:5,
            title:"Advancing human spaceflight",
            desc:"Since returning human spaceflight capabilities to the United States in 2020, SpaceX is helping build a new era where not just hundreds of people, but thousands and ultimately millions will be able to explore space.",
            btntext:"Join A Mission →",
            imgurl:"https://sxcontent9668.azureedge.us/cms-assets/assets/Advancing_Human_Spaceflight_Desktop_61c8ba1c67.jpg",
            position:"right",
            classname:"spacesuit"
        },
        {
            id:6,
            title:"Delivering high-speed internet from space",
            desc:"Starlink is the world’s most advanced satellite constellation in low-Earth orbit, delivering reliable broadband internet capable of supporting streaming, online gaming, video calls, and more.",
            btntext:"Order Now →",
            videourl:"https://sxcontent9668.azureedge.us/cms-assets/assets/Starlink_12_10_20250428_Deploy_website_DESKTOP_14fe7e072c.mp4",
            position:"left",
            classname:"space"
        },
        
    ]
    return (
    <>
      <header className="navbar">
        <div className="logo">SPACEX</div>

        <div className="navlinks">
          <a href="">Vehicles</a>
          <a href="">Human Spaceflight</a>
          <a href="">Starlink</a>
          <a href="">StarShield</a>
          <a href="">xai</a>
          <a href="">terafab</a>
          <a href="">company</a>
          <a href="">shop</a>
        </div>
        <button className="launchbtn">upcoming launches </button>
      </header>


        <div>
            {
                data.map((ele)=>{
                    return <User key={ele.id} data={ele} />
                })
        }
        </div>

        <footer className="footer">
             <a href="https://x.com/SpaceX" target="_blank" className="x">X</a>
        <div className="footer1">
         <a href="">CAREERS</a>
         <a href="">UPDATES</a>
         <a href="">PRIVATE POLICY</a>
         <a href="">SUPPLIERS</a>
         <a href="">INVESTORS</a>
        </div>
         <div className="footer2">
            <span>© 2026 SPACEX</span>
         </div>
        </footer>
    </>
    )
}
export default Task_Props_With_Conditional