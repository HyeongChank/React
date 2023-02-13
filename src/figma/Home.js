import { Link, useNavigate } from "react-router-dom";
import React from "react";
import head from "../figma/images/image-header.jpg"
import text from "../figma/images/image-홈페이지 문구.jpg"
import home from "../figma/images/icon-home.png"
import profile from "../figma/images/icon-profile.png"
import sns from "../figma/images/icon-sns.png"
import news from "../figma/images/icon-news.png"

const Home = () => {

    return (
        <>
            <div className="header">헤더<img src="images/image-header.jpg"/></div>
            <div className="content"> 
                <div className="menu">
                <li><Link to='/'><img src="images/icon-home.png"/></Link></li>
                <li><Link to='/p1/profile'><img src="images/icon-profile.png"/></Link></li>
                <li><Link to='/p2/sns'><img src="images/icon-sns.png"/></Link></li>
                <li><Link to='/p3/news'><img src="images/icon-news.png"/></Link></li>
                    
                    
                    
                    

                </div>
                <div className="linetext">
                    <img src="images/image-홈페이지 문구.jpg"/>
                    <img src="images/image-홈페이지 문구-1.jpg"/>
                    <img src="images/image-홈페이지 문구 변경1.jpg"/>
                    <img src="images/image-환영합니다.jpg"/>
             </div>
         </div>
            
        </>

        );
}
export default Home;