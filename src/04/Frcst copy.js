import { useState } from "react";
const Frcst = () => {
    /* 공공데이터포털 : 한국환경공단_에어코리아_대기오염정보
    frcstOneCn : 첫째날예보
    frcstTwoCn : 둘째날예보
    frcstThreeCn : 셋째날예보
    frcstFourCn : 넷째날예보

    frcstOneDt : 첫째날예보일시
    frcstTwoDt : 둘째날예보일시
    frcstThreeDt : 셋째날예보일시
    frcstFourDt : 넷째날예보일시
    */
    const [info, setInfo] = useState();      //재랜더링 되는 기능!!!!!!!!!!!!!!
    const items = [
        {
            "frcstFourDt": "2023-02-05",
            "frcstThreeDt": "2023-02-04",
            "frcstTwoCn": "서울 : 낮음, 인천 : 낮음, 경기북부 : 낮음, 경기남부 : 낮음, 강원영서 : 낮음, 강원영동 : 낮음, 대전 : 낮음, 세종 : 낮음, 충남 : 낮음, 충북 : 낮음, 광주 : 낮음, 전북 : 낮음, 전남 : 낮음, 부산 : 낮음, 대구 : 낮음, 울산 : 낮음, 경북 : 낮음, 경남 : 낮음, 제주 : 낮음, 신뢰도 : 보통",
            "gwthcnd": "2월 4일~5일은 중서부지역을 중심으로 국외 미세먼지가 유입되는 가운데 대기 정체로 축적되어 4일 인천· 경기남부·충남, 5일 인천·경기남부·충북·충남에서 미세먼지 농도가 '높음'일 것으로 예상됩니다.",
            "frcstTwoDt": "2023-02-03",
            "frcstFourCn": "서울 : 낮음, 인천 : 높음, 경기북부 : 낮음, 경기남부 : 높음, 강원영서 : 낮음, 강원영동 : 낮음, 대전 : 낮음, 세종 : 낮음, 충남 : 높음, 충북 : 높음, 광주 : 낮음, 전북 : 낮음, 전남 : 낮음, 부산 : 낮음, 대구 : 낮음, 울산 : 낮음, 경북 : 낮음, 경남 : 낮음, 제주 : 낮음, 신뢰도 : 보통",
            "frcstThreeCn": "서울 : 낮음, 인천 : 높음, 경기북부 : 낮음, 경기남부 : 높음, 강원영서 : 낮음, 강원영동 : 낮음, 대전 : 낮음, 세종 : 낮음, 충남 : 높음, 충북 : 낮음, 광주 : 낮음, 전북 : 낮음, 전남 : 낮음, 부산 : 낮음, 대구 : 낮음, 울산 : 낮음, 경북 : 낮음, 경남 : 낮음, 제주 : 낮음, 신뢰도 : 보통",
            "frcstOneDt": "2023-02-02",
            "frcstOneCn": "서울 : 낮음, 인천 : 낮음, 경기북부 : 낮음, 경기남부 : 낮음, 강원영서 : 낮음, 강원영동 : 낮음, 대전 : 낮음, 세종 : 낮음, 충남 : 낮음, 충북 : 낮음, 광주 : 낮음, 전북 : 낮음, 전남 : 낮음, 부산 : 낮음, 대구 : 낮음, 울산 : 낮음, 경북 : 낮음, 경남 : 낮음, 제주 : 낮음, 신뢰도 : 높음",
            "presnatnDt": "2023-01-30"
        }
    ]


    let item = items[0];
    console.log(item);

    const showInfo = (seldt) => {
        let infoArry ;
        console.log(seldt);
        // eslint-disable-next-line default-case
        switch (seldt) {
            case 1: infoArry= item.frcstOneCn.split(','); break;
            case 2: infoArry=item.frcstTwoCn.split(','); break;
            case 3: infoArry=item.frcstThreeCn.split(','); break;
            case 4: infoArry=item.frcstFourCn.split(','); break;
        }

        infoArry = infoArry.map((item2) => 
        // item2.includes('높음') ?
        // <li key={`${item2}`} className = 'lired'>{item2}</li> :
        // <li key={item2} style = {{color:'white',backgroundColor:'red'}}>{item2}</li>);
        <li>
            <span>{item2.split(':')[0]}</span>(
                {
                item2.includes('높음') ?
                <span className = 'lired'>{item2.split(':')[1]}</span> :
                <span>{item2.split(':')[1]}</span>   
                }
                )
        </li>
        );
        // `쓰면 중괄호 안에 문자열(변수포함) 들어가짐
        // * 변수는 중괄호 안에 들어가야 함. 중괄호 없으면 그냥 글자임
        
        console.log(infoArry);
        setInfo(infoArry);
    }

    return (
        <>
            <div className="main">
                <div className="mainbox1">
                    <div className="dtdiv1" onClick={() => showInfo(1)}>{item.frcstOneDt}</div>
                    <div className="dtdiv1" onClick={() => showInfo(2)}>{item.frcstTwoDt}</div>
                    <div className="dtdiv1" onClick={() => showInfo(3)}>{item.frcstThreeDt}</div>
                    <div className="dtdiv1" onClick={() => showInfo(4)}>{item.frcstFourDt}</div>
                </div>
                <div className="mainbox2">
                    <div className="detail1">
                        <ul>
                        {info}
                        </ul>
                    </div>
                </div>

            </div>

        </>
    );
}

export default Frcst;