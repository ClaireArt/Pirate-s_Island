import React, { useState, useRef, useEffect, memo } from 'react';
import './MainPhone.css';
import { AppleStore, GooglePlay, Phone, Scull, topBorder } from '../../Images/Images';
import { button } from '../svg/icon';
import { phoneImg } from '../../DataFolder/Data';

function MainPhone() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [viewitem, setViewItem] = useState(false);
    const phoneRef = useRef(null);

    const nextButtonclick = () => {
        if (currentIndex < phoneImg.length - 1) {
            setCurrentIndex(currentIndex + 1);
        }
    };

    const prevButtonclick = () => {
        if (currentIndex > 0) {
            setCurrentIndex(currentIndex - 1);
        }
    };
    // ----------------------------------------------------------------

    useEffect(() => {
        window.addEventListener('scroll', (e) => {
            if (window.scrollY >= phoneRef.current.offsetTop) {
                setViewItem(true)
            }
        })
        console.dir(phoneRef.current);
    }, [])

    return (
        <div className='main_phone' ref={phoneRef}>
             <div className='top'><img src={topBorder} /></div>
            {viewitem &&
                <div className='phone_box'>
                    <button onClick={() => prevButtonclick()} className='prevButton'>{button}</button>
                    <div className='phone'>
                        <img className="phone_border" src={Phone} alt="" />
                        <div className="phone_background"><img src={phoneImg[currentIndex].img} /></div>
                        <img className="scull" src={Scull} alt="" />
                    </div>
                    <button onClick={() => nextButtonclick()} className='nextButton'>{button}</button>
                </div>}
            {viewitem &&
                <div className='phone_text'>
                    <h1>На Пиратском острове</h1>
                    <span>В этой игре тебя ждут невероятные приключения и открытия!</span>
                    <span>Играй один или бросай вызов друзьям и торопись открыть новые уровни.</span>
                    <div className='phone_market_box'>
                        <div className='phone_market'><img src={AppleStore} alt="not Found" /></div>
                        <div className='phone_market'><img src={GooglePlay} alt="not Found" /></div>
                    </div>
                </div>}
        </div>
    )
}

export default memo(MainPhone)