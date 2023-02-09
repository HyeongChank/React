import GalM from "./GalM";
import data from "../DB/data.json";
import Practice from "./Practice";
//한국관광공사_관광사진 정보_GW
// https://apis.data.go.kr/B551011/PhotoGalleryService1/gallerySearchList1?serviceKey=서비스키&numOfRows=10&pageNo=1&MobileOS=ETC&MobileApp=AppTest&arrange=A&keyword=%eb%b6%80%ec%82%b0+%ec%b6%95%ec%a0%9c&_type=json
// galContentId	string  콘텐츠 아이디
// galContentTypeId	string 콘텐츠 타입 아이디
// galTitle	string 제목
// galWebImageUrl	string 웹용 이미지 경로
// galCreatedtime	string 등록일
// galModifiedtime	string 수정일
// galPhotographyMonth	string 촬영월
// galPhotographyLocation	string 촬영장소
// galPhotographer	string 촬영자
// galSearchKeyword	string 검색 키워드

const Gal = () => {

    //let listt = data.response.body.items.item;
    //let c1 = listt.map((k)=>k.getTitle)

    let list = data.response.body.items;
      console.log(list);
    list = list['item'];
    console.log(list);
    let c1 = list.map((k)=>k['galTitle'])
    console.log("c1",c1);

    let c2 = list.map((k) => [k.galTitle, k.galWebImageUrl,k.galPhotographyLocation,k.galPhotographer,k.galPhotographyMonth,k.galSearchKeyword]);
    console.log("c2",c2);

    return (
        <>
        <GalM c1={c1} c2={c2} list={list}/>
      
        </>
    ); 
}

export default Gal ;