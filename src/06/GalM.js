
import GalContent from "./GalContent";
import GalTitle from "./GalTitle";
import './Gal.css'
import { useState, useEffect ,useRef} from "react";

const GalM =({c1, c2, list}) =>{
    console.log(c1);
    let [selc1, setselc1] = useState();
    let [selc2, setselc2] = useState([]);
    

    console.log("selc2",selc2);
//selc1이 바뀔 때마다 useEffect 안의 내용 실행
    useEffect(() => {
        console.log("selc1",selc1);
        setselc2(c2.filter((i)=>i[0]===selc1));
    },[selc1]);

    useEffect(() =>{
        console.log("selc2",selc2)
    },[selc2]);

  
//selc2 초기값없기 때문에 오류남 selc2&& 붙여서 해결
    return(
        <>
       
        <div className="main">
            <GalTitle c1={c1} selc1={selc1} setselc1={setselc1}/>
            {selc2 && <GalContent selc2={selc2} />}
        </div>
        </>
    );
}
export default GalM;