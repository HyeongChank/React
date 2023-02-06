const Tc2 =({selc2, setselc2, setselc2A, selc2A}) =>{
    // console.log("setselc2", setselc2A, "c2", c2);
    console.log("selc2",selc2);
    // console.log("c2Tag",c2Tag, "selc2A", selc2A);
    //중분류가 클릭되었을때
    const show = (v) =>{
        setselc2(v[1])

    }
    const c2Tag = selc2A.map((v) => 
    <div className={v ===selc2 ? "tcardsel" : "c1List"} key={v} onClick={() => show(v)}>{v}</div>
    );

   
    return(
        <>
        <div className="Tc2">
            <h2>중분류</h2>
            <div className="Tc2Card">{c2Tag}</div>
        </div>
            </>
    )
}
export default Tc2;