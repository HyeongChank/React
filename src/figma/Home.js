import { Link, useNavigate } from "react-router-dom";
import React from "react";
import head from "../figma/images/image-header.jpg"
import maintext from "../figma/images/image-text1.jpg"
import text2 from "../figma/images/image-text2.jpg"
import text3 from "../figma/images/image-text3.jpg"
import text4 from "../figma/images/image-text4.jpg"
import home from "../figma/images/icon-home.png"
import profile from "../figma/images/icon-profile.png"
import sns from "../figma/images/icon-sns.png"
import news from "../figma/images/icon-news.png"

const Home = () => {

    return (
        <>
            <div className="header">헤더{head}</div>
            <div className="content"> 
                <div className="menu">
                <li><Link to='/'>{home}</Link></li>
                <li><Link to='/p1/profile'>{profile}</Link></li>
                <li><Link to='/p2/sns'>{sns}</Link></li>
                <li><Link to='/p3/news'>{news}</Link></li>
                    
                    
                    
                    

                </div>
                <div className="linetext">
                    {maintext}
                    {text2}
                    {text3}
                    {text4}

             </div>
         </div>
            
        </>

        );
}
export default Home;