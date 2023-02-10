import { Link, useNavigate } from "react-router-dom";

const RouteHome =()=>{
    const navigate = useNavigate();
    //오브젝트(아래)
    // const url ={
    //     '사과🍎' : '/p2?item=사과🍎',
    //     '바나나' : '/p2?item=바나나',
    //     '체리' : '/p2?item=바나나'
    // }
    const goUrl = (item) =>{
        let url =`/p2?item=${item}`;
        navigate(url[item]);
        console.log(item);
    }

    return(
        <>
            <h1>HOME</h1>

            <h2>파라미터 전송1</h2>
            <ul>
                <li><Link to='/p1/사과🍎'>사과🍎</Link></li>
                <li><Link to='/p1/바나나'>바나나</Link></li>
                <li><Link to='/p1/체리'>체리</Link></li>
            </ul>
            <h2>파라미터 전송2</h2>
            <button onClick={()=>goUrl('사과🍎')}>사과🍎</button>
            <button onClick={()=>goUrl('바나나')}>바나나</button>
            <button onClick={()=>goUrl('체리')}>체리</button>
        </>
    )
}
export default RouteHome;