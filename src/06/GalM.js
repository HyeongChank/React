
import GalContent from "./GalContent";
import GalTitle from "./GalTitle";
import './Gal.css'
import { useState, useEffect } from "react";

const GalM =({c1, c2, list}) =>{
    console.log(c1);
    let [selc1, setselc1] = useState();
    let [selc2, setselc2] = useState([]);
    let [selc2a, setselc2a] = useState();

    console.log("selc2",selc2);

    useEffect(() => {
        console.log("selc1",selc1);
        setselc2(c2.filter((i)=>i[0]===selc1));
    },[selc1]);

    useEffect(() =>{
        console.log("selc2",selc2)
    },[selc2]);

    // useEffect(()=>{
    //     if(selc1&&selc2){
    //         setseldata(list.filter((i)=> i.galPhotographyLocation===selc1)&&i.[0])
    //     }
    // },[selc2]);

    // useEffect(()=>{
    //     console.log("seldata",seldata)
    // },[seldata]);

    return(
        <div className="main">
        
            <GalTitle c1={c1} selc1={selc1} setselc1={setselc1}/>
            {selc2 && <GalContent selc2={selc2} />}
        </div>
    );
}
export default GalM;