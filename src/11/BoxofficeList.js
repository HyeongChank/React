import { useState, useEffect, useRef } from "react";


const BoxofficeList=({targetDt})=>{
    console.log("targetdt 받음",targetDt);
    const [mvlist, setmvlist] = useState();

    useEffect(()=>{
        
        const apikey = '0470353e6a09b89592446e5d2d6e08d3';
        let url = `'http://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?key=${apikey}&targetDt=${targetDt}'`
        console.log("url",url);
        fetch(url)
        .then((resp)=>resp.json)
        .then((data) =>{

            console.log("data",data);
            console.log(url)
            // const d = data.boxOfficeResult.dailyBoxOfficeList;
            // console.log(d);

        })
        .catch((err)=>console.log(err))
    },[]);

    return(
        <>
        <div>목록{targetDt && mvlist}</div>
        <div>상세</div>
        </>
    )
}
export default BoxofficeList;