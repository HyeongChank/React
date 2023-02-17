import { Form, Link, useNavigate } from "react-router-dom";
import React from "react";
import head from "../figma/images/image-header.jpg"
import Player10 from "../figma/images/image-player1.jpg"
import home from "../figma/images/icon-home.png"
import profile from "../figma/images/icon-profile.png"
import sns from "../figma/images/icon-sns.png"
import news from "../figma/images/icon-news.png"
import player1small from "../figma/images/image-player1small.jpg"
import player2 from "../figma/images/image-player2.jpg"
import player3 from "../figma/images/image-player3.jpg"
import player4 from "../figma/images/image-player4.jpg"

const Player1 = () => {

    return (
        <>
            <div className="header"><img src={head}/></div>
            <div className="content">
                <div className="menu">
                    <li><Link to='/'><img src={home}/></Link></li>
                    <li><Link to='/p1/player1'><img src={profile}/></Link></li>
                    <li><Link to='/p2/player2'><img src={sns}/></Link></li>
                    <li><Link to='/p3/news'><img src={news}/></Link></li>

                </div>
                <div className="p1content">
                    <div><img src={Player10}></img></div>
                    <div>
                        <h1>프로필</h1>
                        <h3>
                            유럽에서 가장 뛰어난 공격형 플레이어 중 하나
                            유럽의 어시스트 킹으로도 잘 알려져 있는 케빈 데 브루인은 2015년 여름에 클럽에 합류했고 시티가 왜 그토록 케빈의 영입을 원했는지는 15/16 시즌의 시티 경기에서 그가 선보인 플레이를 통해 쉽게 이해할 수 있습니다.
                            케빈 데 브루인은 벨기에의 클럽 중 하나인 헹크 (Genk)에서 축구를 시작했고 재빠르게 프로 리그를 위한 선수 명단에 포함되었고 총 6득점, 17 도움을 성고시키며 헹크의 타이틀 획득을 위한 주요 선수로 자리잡았습니다.</h3>
                    </div>
                    <div className="info">
                        <h1>정보</h1>
                        <li>생년월일 : 1991년 6월 28일</li>
                        <li>위치 : DROGEN, 벨기에</li>
                        <li>국적 : 벨기에</li>
                        <li>표지션 : 미드필더</li>
                        <li>입단일 : 2015년 8월 30일</li>

                    </div>
                </div>
                <div className="footer">
                    <Link to='/p1/player1' className="linkimg"><img src={player1small} /></Link>
                    <img src={player2} />
                    <img src={player3} />
                    <img src={player4} />
                </div>
            </div>


        </>

    );
}
export default Player1;