import React from 'react';
import './Main.css';
import MainAvatar from '../main_avatar/MainAvatar';
import MainCards from '../main_cards/MainCards';
import MainItems from '../main_items/MainItems';
import MainVideo from '../main_video/MainVideo';
import MainPhone from '../main_phone/MainPhone';
import { memo } from 'react';

function Main() {
  return (
    <main>
      <div className='container'>
        <section className='main'>
          <MainPhone />
          <MainAvatar />
          <MainCards />
          <MainItems />
          <MainVideo />
        </section>
      </div>
    </main>
  )
}

export default memo(Main)