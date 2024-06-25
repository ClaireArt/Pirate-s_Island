import React, { memo, useEffect, useState } from 'react';
import './Header.css';
import { AppleStore, GooglePlay, background, geography, logo } from '../../Images/Images';

function Header() {
    const [display, setDisplay] = useState(false);

    useEffect(() => {
        setTimeout(() => {
            setDisplay(true)
        }, 500)
    }, [])

    return (
        <header style={{ backgroundImage: `url(${background})` }}>
            <div className='container'>
                <section className='header'>
                    {
                        display &&
                        <div className='header_geography'>
                            <img src={geography} />
                            <div className='header_text'>
                                <div>
                                    <h1>P</h1>
                                    <div>
                                        <div className='header_logo'><img src={logo} /></div>
                                        <h1>i</h1>
                                    </div>
                                    <h1>rate's</h1>
                                </div>
                                <h1>Island</h1>
                            </div>
                        </div>
                    }
                    {
                        display &&
                        <div className='header_market_menu'>
                            <div className='header_market'><img src={AppleStore} /></div>
                            <div className='header_market'><img src={GooglePlay} /></div>
                        </div>
                    }
                </section>
            </div>
        </header>
    )
}

export default memo(Header)