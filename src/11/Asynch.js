// import axios from "axios";
const Asynch =()=>{
    //json 데이터 불러오기
    const url = "http://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?key=f5eef3421c602c6cb7ea224104795888&targetDt=20230213"
    console.log(url);
    fetch(url)
    .then((resp)=>resp.json())
    .then((resp) => console.log("resp",resp))
    // .then((data)=>{
    //     const d = data.boxOfficeResult.dailyBoxOfficeList;
    //     console.log("d",d)
    // })
    .catch((err)=>console.log(err));

    // axios.get(url)
    // .then(resp=>{
    //     const dBoxList = resp.data.boxOfficeResult.dailyBoxOfficeList;
    //     console.log(dBoxList);
    // })
    

    return(
        <>
    
        </>
    )
};
export default Asynch;
