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
            <div className="header"><img src={head}/></div>
            <div className="content"> 
                <div className="menu">
                <li><Link to='/'><img src={home}/></Link></li>
                <li><Link to='/p1/profile'><img src={profile}/></Link></li>
                <li><Link to='/p2/sns'><img src={sns}/></Link></li>
                <li><Link to='/p3/news'><img src={news}/></Link></li>
                    
                    
                    
                    

                </div>
                <div className="linetext">
                <div className="line1"><img src={maintext}/></div>
                <div className="line1"><img src={text2}/></div>
                <div className="line1"><img src={text3}/></div>
                <div className="line1"><img src={text4}/></div>

             </div>
         </div>
            
        </>

        );
}
export default Home;