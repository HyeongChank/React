import {useState, useEffect} from "react";
const Boxofficedetail =({targetDt}) =>{
    const [detailTag, setdetailTag] = useState();
    
    
    const getData = async() =>{
        
        const apikey = 'f5eef3421c602c6cb7ea224104795888';
        let url = `http://www.kobis.or.kr/kobisopenapi/webservice/rest/movie/searchMovieInfo.json?key=f5eef3421c602c6cb7ea224104795888&movieCd=${targetDt}`
        console.log("url",url);
        try{
            const resp = await fetch(url);
            console.log("resp",resp)
            const data = await resp.json();
            console.log("data",data)

            let temp = data.movieInfoResult.movieInfo;
            console.log("temp.moviNm",temp.movieNm);
            console.log("temp22", temp)
            const showitem = {
                "영화명" : "movieNm",
                "개봉일" : "openDt" ,
                "제작상태" : "prdtStatNm",
                "영화구분" : "typeNm",
            
            }
            console.log("showitem",showitem)
            let tag = [];
            for(let [k,v] of Object.entries(showitem)){
                tag.push(<div className="detail2">
                    <span className="s1">{k}</span>
                    <span className="s2">{temp[v]}</span>
                   
                </div>)
               
            }
            setdetailTag(tag);
            
        }
        

        catch(err){
            console.log(err)
        }
        
        }
    useEffect(()=>{
        getData();
        console.log("detailTag",detailTag);
    },[targetDt])
    
    return(
        <>
            {detailTag};
        </>
    )
}
export default Boxofficedetail;