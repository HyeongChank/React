import { useState,useRef, useEffect } from "react";



const GalTitle =({c1, selc1, setselc1}) =>{
    const txtR = useRef();
    console.log("selc1",selc1);
    console.log("c1", c1);
    const show =(v)=>{
        setselc1(v);
    };
    // const c1Tag = c1.map((v) => 
    // <div className={v===selc1 ? "selc1view" : "c1view"} key={v} onClick={() => show(v)}>{v}</div>
    // );
    
    const [c1Tag, setc1Tag] = useState();

    useEffect(()=>{
        txtR.current.focus();
        
    },[])
   
    const showC1 =() =>{
        
        console.log(txtR.current.value);
        let temp =c1.filter((i) =>
            i.includes(txtR.current.value)
        )
       
        setc1Tag(temp.map((v) => 
        <div className={v===selc1 ? "selc1view" : "c1view"} key={v} onClick={()=>show(v)}>{v}</div>
        ));
        console.log("temp",temp);
        return;

    }


    return(
        <>
    
        <div className="title">
        <div className="hsearch">
        <form name="search">
            <span>검색</span><input ref={txtR} type="text" name="txt1" onChange={showC1}/>
            <button type="reset">취소</button>

        </form>
        </div>
        <div>{c1Tag}</div>
        </div>
        </>
    );
}
export default GalTitle;