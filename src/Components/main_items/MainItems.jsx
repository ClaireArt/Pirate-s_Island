import React, { useRef, useState, useEffect } from 'react';
import './MainItems.css';
import { Item1, Item2, Item3, Ocean, bottomBorder, topBorder } from '../../Images/Images';
import Game from '../game/Game';
import { memo } from 'react';

function MainItems() {
    const [viewitem, setViewItem] = useState(false);
    const itemsRef = useRef(null);

    useEffect(() => {

        window.addEventListener('scroll', (e) => {
            if (window.scrollY >= itemsRef.current.offsetTop) {
                setViewItem(true)
            }
        })

    }, [])

    return (
        <div className='main_items' style={{ backgroundImage: `url(${Ocean})` }} ref={itemsRef} >
            <div className='bottom'><img src={bottomBorder} /></div>
            {viewitem &&
                <div className='ship_items_box'>
                    <div className="ship_items">
                        <div className='ship_item'><img src={Item1} /></div>
                        <span>Сразись с друзьями</span>
                    </div>
                    <div className="ship_items">
                        <div className='ship_item'><img src={Item2} /></div>
                        <span>Покори 40+ островов</span>
                    </div>
                    <div className="ship_items">
                        <div className='ship_item'><img src={Item3} /></div>
                        <span>Вступи в Братство пиратов</span>
                    </div>
                </div>}
                <Game/>
            <div className='top2'><img src={topBorder} /></div>
        </div>
    )
}

export default memo(MainItems)