import './Boxoffice.css'
import BoxofficeList from './BoxofficeList';
import { useState, useEffect, useRef } from "react";

const Boxoffice =()=>{
    //상영일 선택
    const [targetDt, settargetDt] = useState();

    //input 제어
    const mvdr = useRef();
    //처음 랜더링 포커스
    useEffect(()=>{
        mvdr.current.focus();
    },[])

    //targetdt 변경 시
    useEffect(()=>{
        console.log("targetdt",targetDt)
    },[targetDt])


    //input 이벤트
    const handlemv = ()=>{
        console.log(mvdr.current.value)
        settargetDt(mvdr.current.value.replaceAll('-',''))
        
    }
    return(
        <>
            <div className="mvhead">
                <h1>박스오피스</h1>
                <form>
                    <input type="date" name="mvd" ref={mvdr} onChange={handlemv}/>
                </form>
            </div>
            <div className="mvmain">
                <BoxofficeList targetDt={targetDt}/>
              
            </div>

        </>
    )
}
export default Boxoffice;