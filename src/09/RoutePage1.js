import { useParams } from "react-router-dom";

const RoutePage1 =()=>{
    const item = useParams().item;
    console.log(item);
    let tag;

    const fruits = ['사과🍎','바나나','체리','포도'];
    if(fruits.includes(item)) tag = "과일";
    else tag ="과일아님";
    
    return(
        <>
            <h1>page1</h1>
            <p>{`${item}는 ${tag}`}</p>
        </>
    )
}
export default RoutePage1;