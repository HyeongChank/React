import Wheader from "./Wheader";
import items2 from "../DB/weather.json";
const W2 =() =>{
    
    let item2 = items2.response.body.items.item;
    console.log(item2);
    
    return(
        <>
        <div className="main">
        <Wheader title={'일기예보-장기'}/>
        <div>
            <button>er</button>
            <button>er</button>
            <button>er</button>
            <button>er</button>
        </div>
        <div>

        </div>
        </div>
        </>
    )
}
export default W2;