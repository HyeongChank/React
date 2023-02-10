import { Link } from "react-router-dom";
const Wheader =({title}) =>{
    
    return(
        <>
        <div className="wh">
            <h1>{title}</h1>
            <Link to="/"></Link>
            <div className="whdiv"></div>
        </div>
        </>
    )
}
export default Wheader;