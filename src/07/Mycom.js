
import { useState, useEffect, useRef } from "react";

const Mycom = () => {
    const [tag,settag] = useState();
    const txt1R = useRef();
    const txt2R = useRef();

    //컴포넌트가 처음 랜더링 되었을때
    useEffect(()=>{
        txt2R.current.focus();
    },[]);

    const checkform =(e)=>{
        e.preventDefault();
        settag(`입력된 아이디는 ${txt1R.current.value}이고 
        비밀번호는 ${txt2R.current.value}입니다.`);
    }

//반드시 form으로 묶어야 함 name 속성 줘야 함
    return (
        <>
            <form>
            <input ref={txt1R} type="text" name="txt1" placeholder="아이디입력"/>
            <input ref={txt2R} type="password" name="txt2" placeholder="비밀번호입력"/>
            <input type="button" value="확인" onClick={checkform}/>
            <input type="reset" value="취소"/>
            </form>
            <div>
                {tag}
            </div>
        </>
    )
}
export default Mycom;