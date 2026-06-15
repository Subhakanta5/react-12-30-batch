
import Conditional_Rendering from "./topics/conditional_rendering/Conditional_Rendering"
import Fragment_Concept from "./topics/fragments/Fragments_Concept"
import UseStateHook from "./topics/hooks/UseStateHook"
import Jsx_Expression from "./topics/jsx_expression/jsx_Expression"
import Jsx_Rules from "./topics/jsx_expression/Jsx_Rules"
import Jsx_Task from "./topics/jsx_expression/Jsx_Task"
import Props_Home from "./topics/props/Props_Home"
import Props_With_Conditional from "./topics/props_conditional_rendering/Props_With_Conditional"
import Task_Props_With_Conditional from "./topics/props_conditional_rendering/Task/Task_Props_With_Conditional"

const App=()=>{
    // console.log("App file");
    
    return (
        <div id="App">
            {/* <Jsx_Task/> */}
            {/* <Jsx_Rules/> */}
           {/* <Jsx_Expression/> */}
            {/* <Props_Home/> */}   
            {/* <Conditional_Rendering/> */}
            {/* <Props_With_Conditional/> */}
            <Task_Props_With_Conditional/>
            {/* <Fragment_Concept/> */}
            {/* <UseStateHook/> */}
        </div>
    )
}
export default App