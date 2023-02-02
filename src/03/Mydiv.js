//mydiv1 태그 안에 user={rname}으로 넘겼기 때문에 mydiv1 에 probs로 받음(재정의해서 사용(probs.user)) / {rname}으로 바로 받아도 됨
import Mydiv1 from "./Mydiv1";
import Mydiv2 from "./Mydiv2";
import './Mydiv.css';
import { useState } from "react";

const Mydiv = () =>{
    const rname = ['React'];
    const [n,setN] = useState(0);
    const upN =() =>{
        setN(++n);
    }
    const changeN =() =>{

    }
    let number = 100;
    return(
        <div className="content">
            <div className="header">
                <h1 >컴포넌트 예제{rname}{number}{n}</h1>
                <div className="rere" >{rname}</div>
            </div>
            <div className="main">
                <Mydiv1 user={rname} n={n} setN={setN}/>  
                <Mydiv2 user={rname} number={number} n={n} setN={setN} />
            </div>
        </div>
    );
}
export default Mydiv ;