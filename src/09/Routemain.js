import RouteHome from "./RouteHome";
import RouteNv from "./RounteNv";
import RoutePage1 from "./RoutePage1";
import RoutePage2 from "./RoutePage2";
import { Route, Routes} from "react-router-dom";


const Routemain =()=>{

    return(
        <>
        <RouteNv/>
        <Routes>
            <Route path="/" element={<RouteHome/>}/>
            <Route path="/p1" element={<RoutePage1/>}/>
            <Route path="/p2" element={<RoutePage2/>}/>
        </Routes>
        </>
    )
}
export default Routemain;