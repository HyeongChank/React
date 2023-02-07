import userEvent from "@testing-library/user-event";
import { useState, useEffect, useRef } from "react";

const Mycom = () => {
    //컴포넌트 내부 변수
    let cnt1 = 0;

    //state 변수
    const [cnt2, setCnt2] = useState(0);
    const cnt3 = useRef(0);

    const showCnt = ()=>{
        console.log(`cnt1 = ${cnt1}`)
        console.log(`cnt2 = ${cnt2}`)
        console.log(`cnt3 = ${cnt3.current.value}`)
    }
    //cnt1은 usestate 안써서 화면에 변경안됨
    const addCnt1 =()=>{
        cnt1 = cnt1+1;
        console.log(cnt1);
    }
    //cnt2는 useState로 해서 화면 변경ㅇ(setCnt2로 변경해야됨!!)
    const addCnt2 =()=>{
        setCnt2(cnt2+1);
    }
    useEffect(()=>{
        console.log(cnt2)
        showCnt();
    },[cnt2])


    const addCnt3 =()=>{
        cnt3.current.value = cnt3.current.value +1;
        showCnt();
    }


    return (
        <>
            <ul>
                <li>cnt1 = {cnt1}</li>
                <li>cnt2 = {cnt2}</li>
                <li>cnt3 = {cnt3.current.value}</li>
            </ul>
            <form>
                <input type="button" value="cnt1증가" onClick={addCnt1}/>
                <input type="button" value="cnt2증가" onClick={addCnt2}/>
                <input type="button" value="cnt3증가" onClick={addCnt3}/>
                {/* <button>cnt1증가</button> */}
            </form>
        </>
    )
}
export default Mycom;