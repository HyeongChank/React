import Mydiv22 from "./Mydiv22";

const Mydiv2 =(probs) =>{
    const user = probs.user;
    return(
        <div className="mydiv2">
          <h2 className="divh2">Mydiv2{user}</h2>
          <Mydiv22 user={user} divname = '실험중'/>
        </div>
    );
}
export default Mydiv2;