import React from 'react';
import { comment, facebook, geography, logo, robot, youtube } from '../../Images/Images';
import './FooterPirate.css';
import { memo } from 'react';

function FooterPirate({color, opacity}) {
    return (
        <div className='footer_pirate' style={{backgroundColor: color, opacity: opacity}}>
            <div className='footer_geography'>
                <img src={geography} />
                <div className='footer_text'>
                    <div>
                        <h1>P</h1>
                        <div>
                            <div className='footer_logo'><img src={logo} /></div>
                            <h1>i</h1>
                        </div>
                        <h1>rate's</h1>
                    </div>
                    <h1>Island</h1>
                </div>
            </div>
            <span>Остров игры</span>
            <div className='footer_icon_menu'>
                <div className="footer_icon" ><img src={comment} /></div>
                <div className="footer_icon" ><img src={facebook} /></div>
                <div className="footer_icon" ><img src={robot} /></div>
                <div className="footer_icon" ><img src={youtube} /></div>
            </div>
        </div>
    )
}

export default memo(FooterPirate)