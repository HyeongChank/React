const Tdetail =({seldata, setseldata, selc2A}) =>{
    console.log("seldata",seldata);
    let keys =["사고유형_대분류","사고유형_중분류"];
    let dTag = keys.map((k) =>
        <li key={k}>
            <span className="sp1">{k}</span>
            <span className="sp2">{seldata[k]}</span>
            </li>
     );
     dTag.push(
        <li key='치명률'>
            <span className="sp1">치명률</span>
            <span className="sp2">{parseInt(seldata["사망자수"])/parseInt(seldata["사고건수"])}</span>
        </li>
     );
 
    // let seldataTag= [...seldata];
    // console.log("seldataTag",seldataTag);
    // seldataTag = seldataTag.map((v) => 
    // <div>{v}</div>)
    return(
        <>
        <div className="Tcdetail">
            <h2>detail</h2>
            <div className="TcdetailCard"><ul>{dTag}</ul></div>
        </div>
        </>
    )
}
export default Tdetail;