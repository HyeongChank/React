//cnt 변경이 화면에 나오게 하기 위해서 useState 변수로 설정(함수형 변수 x) => useState hook이라고 함
//cnt 변수를 변경하고 싶으면 setCnt를 통해서 바꿔야 함.(바로 cnt++ x / setCnt 안에서 바꿔야 함)
//setN을 넘겨주고 받으면 자식에서 부모로 적용됨

import Mydiv11 from "./Mydiv11";
import { useState } from "react"; //hook 재랜더링
import { useEffect } from "react";

const Mydiv1 =(probs) =>{
    const user = probs.user;
 
    let n = probs.n;
    const setN = probs.setN;
    let [cnt, setCnt] = useState(0);  //변수명, set변수명 으로 작성하는게 규칙
    
    const addCnt =() =>{
        setCnt(++cnt);
        if(cnt ===5){
          setCnt(0);
        }
        setN(++n);

        
        console.log(cnt);
    }
    //랜더링마다 변경
    useEffect(()=>{
      console.log('변경입니다')
    },);
    //처음에 한번([] 있음)
    useEffect(()=>{
      console.log('처음입니다')
      return(
        console.log("종료")
      )
    },[]);

    useEffect(()=>{
      setN(++n) 
    },[cnt]);
    return(
        <div className="mydiv1">
          <h2 className="divh1">Mydiv1{user} n={n}</h2>
          <Mydiv11 user={user} divname={'사용자정의' + cnt}/>
          <div className="divbt">
            <button onClick={addCnt}>❤</button>
            <span>{cnt}</span>
          </div>
        </div>
    );
}
export default Mydiv1;