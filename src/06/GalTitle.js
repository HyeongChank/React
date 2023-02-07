const GalTitle =({c1, selc1, setselc1}) =>{
    console.log("selc1",selc1);
    const show =(v)=>{
        setselc1(v);
    };
    const c1Tag = c1.map((v) => 
    <div className={v===selc1 ? "selc1view" : "c1view"} key={v} onClick={() => show(v)}>{v}</div>
    );
    return(
        <>
        <div className="title">{c1Tag}</div>
        </>
    );
}
export default GalTitle;