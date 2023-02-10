import Wheader from "./Wheader";
import weather2 from '../DB/weather2.json'
import keys from '../DB/item.json';
const W1 =() =>{

    console.log("weather2",weather2);
    console.log("keys",keys);
    let items = weather2.response.body.items.item;
    console.log("items", items);
    
///////원하는 배열 만들기//////////////////
    let w2 = items.map((i)=>{
        let temp =[];
        temp.push(keys[i.category][0]);
        temp.push(i.obsrValue);
        temp.push(keys[i.category][1]);
        return temp;
    });
    console.log("w2",w2);
    let wTag1 = w2.map((k)=><div>{k[0]}</div>);
    let wTag2 = w2.map((k)=><div>{k[1]}</div>);
    let wTag3 = w2.map((k)=><div>{k[2]}</div>);
    console.log(wTag1);

    return(
        <>
        <div className="main">
          <Wheader title={'일기예보-단기'}/>
          <div>
            <div className="spangroup">
                <span className="sp0">{wTag1}</span>
                <span className="sp1">{wTag2}</span>
                <span className="sp2">{wTag3}</span>

            </div>
          </div>
            {/* <h2>w1</h2>
            <div>{c2}</div>
            <div>{c1}</div>
            <div></div> */}
        </div>    
        </>
    )
}
export default W1;