import React, { useRef, useState, useEffect, memo } from 'react';
import './MainVideo.css';
import { AppleStore, GooglePlay, Ship, line } from '../../Images/Images';

function MainVideo() {

    const [viewitem, setViewItem] = useState(false);
    const videoRef = useRef(null);

    useEffect(() => {

        window.addEventListener('scroll', (e) => {
            if (window.scrollY >= videoRef.current.offsetTop+300) {
                setViewItem(true)
            }
        })

    }, [])

    return (
        <div className='main_video' ref={videoRef}>
            <div className='video_box'>
                {viewitem && <h1>Правь в открытом море</h1>}
                {viewitem && <span>Официальный трейлер игры</span>}
                <video muted autoPlay loop preload='auto'>
                    <source src="https://video.wixstatic.com/video/c837a6_a00352170574407099c5f2045dde8944/480p/mp4/file.mp4" />
                </video>
            </div>
            {
                viewitem &&
                <div className='main_video_text_ship'>
                    <div className='main_video_text'>
                        <span>Бесплатный доступ</span>
                        <h1>Пиратский остров</h1>
                        <div className='main_video_market_box'>
                            <div className='main_video_market'><img src={AppleStore} /></div>
                            <div className='main_video_market'><img src={GooglePlay} /></div>
                        </div>
                    </div>
                    <div className='ship'><img src={Ship} /></div>
                </div>
            }
            <div className='line'><img src={line} /></div>
        </div>
    )
}

export default memo(MainVideo)