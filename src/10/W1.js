import Wheader from "./Wheader";
import weather2 from '../DB/weather2.json'
import keys from '../DB/item.json';
import { useState,useEffect } from "react";

const W1 =() =>{
//usestate() 안에 비어있어서 undifined 나옴 undifined 는 false , undefined 나오면 usestate 배열 [] 확인하기
    const [items, setitems] = useState([]);
    const [itemTag, setitemTag] = useState();

    //랜더링 발생할 때마다 실행
    // useEffect(()=>{});
    //맨처음 컴포넌트 랜더링 시 실행
    useEffect(()=>{
        console.log(weather2);
        console.log(keys);
        setitems(weather2.response.body.items.item);
    
        console.log("items맨처음",items);
    },[]);
    //특정 state 변수 변경 시 실행
    useEffect(()=>{
        if(!items) return;
        console.log("변수실행시", items);
        let temp = items.map((i, n)=>
            <div className="spangroup1" key={"span11"+n}>
                <span className="sp0">{keys[i.category][0]}</span>
                <span className="sp1">{i.obsrValue}</span>
                <span className="sp2">{keys[i.category][1]}</span>
            </div>
        );

        setitemTag(temp);
    },[items]);





//     console.log("weather2",weather2);
//     console.log("keys",keys);
//     let items = weather2.response.body.items.item;
//     console.log("items", items);
    
// ///////원하는 배열 만들기//////////////////
//     let w2 = items.map((i)=>{
//         let temp =[];
//         temp.push(keys[i.category][0]);
//         temp.push(i.obsrValue);
//         temp.push(keys[i.category][1]);
//         return temp;
//     });
//     console.log("w2",w2);
//     let wTag1 = w2.map((k)=><div>{k[0]}</div>);
//     let wTag2 = w2.map((k)=><div>{k[1]}</div>);
//     let wTag3 = w2.map((k)=><div>{k[2]}</div>);
//     console.log(wTag1);

    return(
        <>
        <div className="main">
            <Wheader title={'일기예보-단기'}/>
            {items && itemTag};
      
       
        </div>    
        </>
    )
}
export default W1;