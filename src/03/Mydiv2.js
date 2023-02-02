import Mydiv22 from "./Mydiv22";
import { useState } from "react";
const Mydiv2 =(probs) =>{

    const user = probs.user;
    let number = probs.number;
    let n = probs.n;
    let[cnt,setCnt] = useState(0);
    const addCnt =()=>{
      setCnt(++cnt);
    }
    let sum = n+cnt;
    return(
        <div className="mydiv2">
          <h2 className="divh2">probs로 받은 값 : {user} {number}</h2>
          <h2 className="divh2">부모로부터 가져온 값 {n}+ 자식 값 {cnt} ={sum}</h2>
          <Mydiv22 user={user} divname = '실험중'/>
          <button onClick={addCnt}>버튼</button>
          <span>{cnt}</span>
        </div>
    );
}
export default Mydiv2;