import './Myform.css'
import { useRef, useState } from 'react';

const Myform = () => {
    //폼연결
    const txt1R = useRef();
    const txt2R = useRef();
    const sel1R = useRef();

    //화면 표시 태그
    const [msgTag, setmsgTag] = useState();

    const formCheck = () => {
        if (txt1R.current.value === "") {
            alert("아이디를 입력하세요");
            txt1R.current.focus();
            return;
        }
        if (txt2R.current.value === "") {
            alert("아이디는" + "입니다." + txt1R.current.value + "비밀번호를 입력하세요");
            txt2R.current.focus();
            return;
        }
        setmsgTag(<p>아이디 <span>{txt1R.current.value}</span>의 선택과목은 <span>{sel1R.current.value}</span>입니다.</p>)

    }

    return (
        <>
            <form name="myForm">
                <p>
                    <label htmlFor="txt1">아이디 : </label><br />
                    <input ref={txt1R} type="text" name="txt1" id="txt1" placeholder="아이디입력" />
                </p>
                <p>
                    <label htmlFor="txt2">비밀번호 : </label>
                    <input ref={txt2R} type="password" name="txt2" id="txt2" placeholder="비밀번호입력" />
                </p>
                <p>
                    <label htmlFor="txt2">선택과목 : </label>
                    <select ref={sel1R} defaultValue="react" name="sel1">
                        <option value="java">java</option>
                        <option value="html">html</option>
                        <option value="javascript">javascript</option>
                        <option value="react">react</option>
                    </select>
                </p>
                <p>
                    <input className='button' type="button" value="확인" onClick={formCheck} />
                    <input className='button' type="reset" value="취소" />
                </p>

            </form>

            <div id="msg">
                {msgTag};
            </div>


        </>
    );
}
export default Myform;