

import Thead from "./Thead";
import Tc1 from "./Tc1";
import Tc2 from "./Tc2";
import Tdetail from "./Tdetail";
import "./Taccident.css";
import { useState, useEffect } from "react";

const TaccidentM = ({c1, c2, data}) =>{
    // console.log("c1", c1)
    // console.log("c22", c2)
    // console.log("data", data)
    //setc1use, setc2use 는 함수

    //선택된 대분류
    let [selc1, setselc1] = useState();
    //선택된 대분류에 해당하는 중분류 저장
    let [selc2A, setselc2A] = useState([]);
    //선택된 중분류
    let [selc2, setselc2] = useState();
    //선택된 항목
    let [seldata, setseldata] = useState({});

        //state 변수 변경
    //맨 처음 한번만 실행할 경우
    // useEffect(() =>{
    //     console.log("처음한번만")
    // },[]);    

    //해당하는 state 변수가 변경될 떄마다
    useEffect(() => {
        console.log("selc1",selc1);
        setselc2A(c2.filter((i)=>i[0]===selc1));
    },[selc1]);

    useEffect(()=>{
        console.log("selc2A",selc2A);
    },[selc2A]);
    //컴포넌트 랜더링이 일어날떄마다
    // useEffect(() =>{
    //     console.log("계속")
    // });    
    
   
    // useEffect(()=>{
    //     console.log("selc2",selc2);
    // },[setselc2])

    useEffect(()=>{
        if(selc1&&selc2){
            setseldata(data.filter((i)=>i.사고유형_대분류 === selc1&& i.사고유형_중분류 ===selc2 )[0])
        }
    },[selc2]);

    useEffect(()=>{
        console.log("seldata",seldata)
    },[seldata]);
    return(
        <>
        <div className="content">
            <div className="head">
              <Thead/>    
            </div>
            <div className="main">
                <Tc1 c1={c1} setselc1={setselc1} selc1={selc1}/>
                <Tc2 c2={c2} setselc2A={setselc2A} selc2A={selc2A} selc2={selc2} setselc2={setselc2}/>
                <Tdetail seldata={seldata} setseldata={setseldata} selc2A={selc2A}/>
            </div>
        </div>

        </>
    )
}
export default TaccidentM;