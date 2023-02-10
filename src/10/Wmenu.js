import weather from '../DB/weather.json';
import weather2 from '../DB/weather2.json';
import item from '../DB/item.json';
import Wheader from './Wheader';
import { useState } from 'react';
import './Wcss.css';

import { Link } from 'react-router-dom';

const Wmenu =() =>{
    
 


    return(
        <>
       
        <div className="main">
            <Wheader title={'일기예보'} />
            <ul >
                <li className="button"><Link to="/w1">단기</Link></li>
                <li className="button"><Link to="/w2">중기</Link></li>
            </ul>

        </div>
        </>
    )
}
export default Wmenu;