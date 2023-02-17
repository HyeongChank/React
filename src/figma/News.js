import { Form, Link, useNavigate } from "react-router-dom";
import React from "react";
import head from "../figma/images/image-header.jpg"
import news1 from "../figma/images/image-news1.jpg";
import news2 from "../figma/images/image-news2.jpg";
import home from "../figma/images/icon-home.png";
import profile from "../figma/images/icon-profile.png";
import sns from "../figma/images/icon-sns.png";
import news from "../figma/images/icon-news.png";
import player1small from "../figma/images/image-player1small.jpg";
import player2 from "../figma/images/image-player2.jpg";
import player3 from "../figma/images/image-player3.jpg";
import player4 from "../figma/images/image-player4.jpg";


const News = () => {

    return (
        <>
            <div className="header"><img src={head}/></div>
            <div className="content">
                <div className="menu">
                  <li><Link to='/'><img src={home}/></Link></li>
                    <li><Link to='/p1/player1'><img src={profile}/></Link></li>
                    <li><Link to='/p2/player2'><img src={sns}></img></Link></li>
                    <li><Link to='/p3/news'><img src={news}></img></Link></li>

                </div>
                <div className="newscontent">
                    <div className="news"><h1>News</h1></div>
                    <div className="ncon1">
                        <div className="nimg"><img src={news1}></img></div>
                        <div>
                          <h4>또 해트트릭을 몰아친 엘링 홀란드(22)가 맨체스터 시티(맨시티) 구단 역사상 잉글랜드 프리미어 리그 홈 경기에서 가장 많은 골을 넣은 선수 순위 10위권에 입성했다.
맨시티가 홀란드를 영입한 건 불과 지난여름이다. 그러나 그는 일찌감치 홈구장 에티하드 스타디움에서 열린 프리미어 리그 경기에서 18골을 넣는 폭발적인 득점력을 과시하고 있다. 홀란드는 지난 22일 울버햄튼을 상대한 프리미어 리그 20라운드 홈 경기에서는 해트트릭을 기록했다.</h4>
                        </div>
                    </div>
                    <div className="ncon1">
                        <div  className="nimg"><img src={news2}></img></div>
                        <div>
                            <h4>주앙 칸셀루가 이번 22-23 시즌이 끝날 때까지 바이에른 뮌헨으로 임대를 떠난다.
만 28세인 칸셀루는 2019년, 유벤투스에서 적을 옮겨 맨체스터 시티 선수가 됐고, 포르투갈과 스페인을 거쳐 잉글랜드로 온 칸셀루는 이제 독일에서도 선수 커리어를 이어가게 된다.
맨시티에서 4시즌 째 보내고 있는 칸셀루는 맨시티 소속으로 리그에서 2회, 리그 컵에서 2회, 슈퍼컵에서 1회 우승컵을 들어 올렸다. 좌우 풀백에 모두 배치될 수 있는 그의 다재다능함 덕분에 핵심 선수로 거듭날 수 있었고, 총 154경기에 출전해 9골 21도움을 기록했다.</h4>
                        </div>
                    </div>
                 
                </div>
                <div className="footer">
                    <img src={player1small} />
                    <img src={player2} />
                    <img src={player3} />
                    <img src={player4} />
                </div>
            </div>
            
        </>

        );
}
export default News;