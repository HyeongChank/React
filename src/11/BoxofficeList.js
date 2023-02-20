import axios from "axios";
import { useState, useEffect, useRef } from "react";
import Boxofficedetail from "./Boxofficedetail";
//화요일까지

const BoxofficeList=({targetDt})=>{

    console.log("targetdt 받음",targetDt);
    const [mvlist, setmvlist] = useState([]);
    const [mvcd, setmvcd] = useState();

    const showDetail =(cd)=>{
        console.log("cd",cd);
        setmvcd(cd.map((i)=>
        <div><span>{i}</span></div>));
    }

    
    // 선택할 때 값 나오게 하려면 결국 랜더랭 usestate 해야함
    useEffect(()=>{
        const apikey = 'f5eef3421c602c6cb7ea224104795888';
        let url = `http://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?key=${apikey}&targetDt=${targetDt}`
 
        fetch(url)
        .then((resp)=>resp.json())
        .then((data) =>{
            // console.log('url', url);
            // console.log("data",data);
           
            setmvlist(data.boxOfficeResult.dailyBoxOfficeList.map((i)=><div className="sptotal" onClick={()=>showDetail([i.movieNm, i.openDt, i.salesAmt, i.rankIntern, i.rankOldAndNew])}>{[
                
                <span className="sp01">{i.rank}</span>,
                <span className="sp02">{i.movieNm}</span>, 
                <span className="sp03">{i.audiInten}</span>
            ]}</div>))
        
            // let dtaillist = [data.boxOfficeResult.dailyBoxOfficeList.movieNm, data.boxOfficeResult.dailyBoxOfficeList.openDt, data.boxOfficeResult.dailyBoxOfficeList.salesAmt, data.boxOfficeResult.dailyBoxOfficeList.rankIntern, data.boxOfficeResult.dailyBoxOfficeList.rankOldAndNew] 
            // for(let i ; i<4; i++){
            // setmerge(
                
            //     infohead[i])
            //  };
            //  console.log("merge",merge);
            })
        
            

        
        .catch((err)=>console.log(err))
    },[targetDt]);

    useEffect(() =>{
        
    }, [mvlist]);
        

    return(
        <>
        
        <div className="list">
            <div className="headline">
            <h3 className="h1">순위</h3>
            <h3 className="h2">영화명</h3>
            <h3 className="h3">관객수</h3>
            </div>
            {targetDt && mvlist}</div>

        <div className="detail">
            <h2>이달의 대표영화</h2>
            {targetDt && <Boxofficedetail targetDt={targetDt}/>}
            </div>
       
        </>
    )
}
export default BoxofficeList;