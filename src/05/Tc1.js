import { useEffect } from "react";

const Tc1 =({c1, setselc1,selc1}) =>{

   
   //대분류가 클릭되었을 때
    const show =(v)=>{
        setselc1(v);
    };
    const c1Tag = c1.map((v) => 
    <div className={v ===selc1 ? "tcardsel" : "c1List"} key={v} onClick={() => show(v)}>{v}</div>
    );


    return(
        <>
        <div className="Tc1">
            <h1>대분류</h1>
            <div className="Tc1Card">
                {c1Tag}
            </div>
        </div>
        </>
    )
}
export default Tc1;