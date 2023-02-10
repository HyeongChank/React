import data from '../DB/data.json'
import './Gal.css';
import { useState, useRef, useEffect } from 'react';

const Practice = () => {

    const item = data.response.body.items.item;
    console.log("item1", item);
    let c1 = item.map((k) => k['galTitle']);
    console.log("c11", c1);
    let c2 = item.map((k) => [k.galTitle, k.galWebImageUrl]);
    console.log("c21", c2)
    let [arrayTag, setarrayTag] = useState();

    // const show =(v)=>{
    //     setselc1(v);
    //     console.log("selc1",selc1);
    // }
 
    const sel1R = useRef();
  
    useEffect(() => {
        sel1R.current.focus();
    }, []);
    let optionTag = c1.map((item) =>
        <option key={item} value={item}>{item}</option>
    )

    

    const handleSel = (e) => {
        e.preventDefault();
        if(sel1R.current.value==="") return;
        console.log("sel1R",sel1R.current.value)
        let temp = item.filter((i)=>i.galTitle === sel1R.current.value);
        console.log("temp", temp)
        console.log("temp array",Object.values(temp[0]))
        let temp2 = Object.values(temp[0]);
        let temp3 = temp2[3];
        console.log("temp3",temp3);
        setarrayTag(()=><div className='card'><img src={temp3}></img></div>)
       
        // setarrayTag(c1.map((k)=>k.galTitle===sel1R.current.value)
        // );
        // console.log("arrayTag",arrayTag);
        // setSelitem("temp",temp[0]);
        // console.log("selitem",selitem[1]);
    }
    // console.log("Object.keys",Object.keys(item));
    // console.log("Object.values",Object.values(item));
    // console.log("Object.values[0]",Object.values(item[0]));
    // console.log("Object.entries",item.entries)
    //해당 파일의 selitem 을 Galcontent 파일의 selc2 로 하겠다
    return (
        <>
            <form>

                <select ref={sel1R} onChange={handleSel}>
                    <option value=""></option>
                    {optionTag};
                </select>
            </form>
           {arrayTag}
        </>
    );
}
export default Practice;