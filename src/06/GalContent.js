const GalContent = ({ selc2 }) => {
    console.log("selc2222", selc2);
 
    let dTag = <h1>부산 관광지 중 하나를 선택해 주세요.</h1>
    
    if (selc2.length > 0) {
        dTag = <div className="cont">
            <div className="spImage"><img src={selc2[0][1]}></img></div>
            <div className="sp1">{selc2[0][0]}</div>
            <div className="sp2">{selc2[0][2]}</div>
            <div className="sp3">{selc2[0][3]}</div>
            <div className="sp4">{selc2[0][4]}.</div>
            <div className="sp5">{selc2[0][5]}</div>
        </div>
    }






    return (
        <>
        
            <div className="content">{dTag}</div>
        </>
    );
};
export default GalContent;