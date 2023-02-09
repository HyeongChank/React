import { Link } from "react-router-dom";

const RouteNv =()=>{

    return(
        <>
        <ul>
            <li><Link to = "/">Home</Link></li>
            <li><Link to = "p1">페이지1</Link></li>
            <li><Link to = "p2">페이지2</Link></li>
        </ul>
        </>
    )
}
export default RouteNv;