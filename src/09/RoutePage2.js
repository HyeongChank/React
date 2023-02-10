import { useLocation } from 'react-router-dom';
import qs from 'query-string';
//query-string 패키지 설치해야 함
//npm install query-string

const RoutePage2 =()=>{
    let location = useLocation().search;
    console.log(location);
    // location = location.split('?')[1];
    let item = qs.parse(location).item;
    console.log("item",item);
    let tag;
    const fruits = ['사과🍎','바나나','체리','포도'];
    if(fruits.includes(item)) tag = "과일";
    else tag ="과일아님";
    
    return(
        <>
            <h1>page2</h1>
            <p>{`${item}는 ${tag}`}</p>
            
        </>
    )
}
export default RoutePage2;