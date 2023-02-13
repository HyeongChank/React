import { Route, Routes} from "react-router-dom";
import Home from "./Home";
import Player1 from "./Player1";
import Player2 from "./Player2";
import News from "./News";
import './index.css';
const RouteMain =()=>{

    return(
        <>
      
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/p1/:item" element={<Player1/>}/>
            <Route path="/p2/:item" element={<Player2/>}/>
            <Route path="/p3/:item" element={<News/>}/>
            
        </Routes>
        </>
    )
}
export default RouteMain;