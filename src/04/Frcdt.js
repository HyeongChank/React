const Frcdt=({dt, setDt}) => {
    // setDt 는 함수
    let dtdiv1Tag = [...dt];
    console.log("setDt",setDt);
    const show= (v) => {
        console.log("show", v);
        setDt(v);
        console.log("setDtttt" ,setDt);
    }
    console.log("frcdttt",dtdiv1Tag);
    dtdiv1Tag = dtdiv1Tag.map((v) =>
    <div className='dtdiv1' key={v} onClick={()=>show(v)}>{v}</div>
    );
    
    
    
    return(
        <div className="mainbox1" >
            {dtdiv1Tag}
        </div>
    )
}
export default Frcdt;