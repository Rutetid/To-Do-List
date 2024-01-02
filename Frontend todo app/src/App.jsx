import { AppBar } from "@mui/material";
import Todos from "./components/Todos";
import Appbar from "./components/Appbar";
import TodoEntry from "./components/TodoEntry";

function App(){
return  (
  
<div style={{
    width : "100vw" ,
    height : "100vh" ,
    backgroundColor : "#eeeeee"}}> 

    <Appbar />
    <Todos />
    
</div>
 )
}

export default App;