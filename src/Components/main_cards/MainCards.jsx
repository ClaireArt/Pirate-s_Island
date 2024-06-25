import React, { useRef, useEffect, useState } from 'react';
import './MainCards.css';
import { Cards1, Cards2, Cards3 } from '../../Images/Images';
import { memo } from 'react';

function MainCards() {
  const [viewitem, setViewItem] = useState(false);
  const cardsRef = useRef(null);

  useEffect(() => {
    window.addEventListener('scroll', (e) => {
      if (window.scrollY >= cardsRef.current.offsetTop) {
        setViewItem(true)
      }
    })
  }, [])

  return (
    <div className='main_cards' ref={cardsRef}>
      {viewitem && <h1>Навстречу приключениям</h1>}
      {viewitem && <span>Карты различных уровней</span>}
      {viewitem &&
        <div className='cards_box'>
          <div className='cards cards1'><img src={Cards1} /></div>
          <div className='cards cards2'><img src={Cards2} /></div>
          <div className='cards cards3'><img src={Cards3} /></div>
        </div>}
    </div>
  )
}

export default memo(MainCards)