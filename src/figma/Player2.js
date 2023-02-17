import { Form, Link, useNavigate } from "react-router-dom";
import React from "react";
import head from "../figma/images/image-header.jpg"
import Playerh from "../figma/images/image-holland.jpg"
import home from "../figma/images/icon-home.png"
import profile from "../figma/images/icon-profile.png"
import sns from "../figma/images/icon-sns.png"
import news from "../figma/images/icon-news.png"
import player1small from "../figma/images/image-player1small.jpg"
import player2 from "../figma/images/image-player2.jpg"
import player3 from "../figma/images/image-player3.jpg"
import player4 from "../figma/images/image-player4.jpg"

const Player2 = () => {

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
                <div className="p2content">
                    <div><img src={Playerh}></img></div>
                    <div>
                        <h1>프로필</h1>
                        <h3>

                            창의적이고 영리한, 공격과 수비 모두에 능한 중앙 미드필더
                            독일에서 힘이 넘치고 지능적인 미드필더로 잘 알려져 있는 일카이 귄도간은 2016년 여름에 시티에 합류했습니다.
                            귄도간은 샬케 04와 Vfl 보훔 등에서 유스 생활을 했으며 시티에 합류하기 전에는 Vfl 보훔 II(2008-2009), 1. FC 뉴른베르크(2009-2011), 보루시아 도르트문트(2011-2016)의 시니어 팀에서 플레이를 펼쳤습니다.</h3>
                    </div>
                    <div className="info">
                        <h1>정보</h1>
                        <li>생년월일 : 2000년 7월 21일</li>
                        <li>위치 : DROGEN, 잉글랜드</li>
                        <li>국적 : 노르웨이</li>
                        <li>표지션 : 공격수</li>
                        <li>입단일 : 2022년 7월</li>

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
export default Player2;