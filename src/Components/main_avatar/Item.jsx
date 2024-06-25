import React, { memo } from 'react';
import './MainAvatar.css';

function Item({ item }) {
    return (
        <div className='item'>
            <div className={`avatar${item.id}`}><img className="avatarImg" src={item.imgUrl} /></div>
            <span className='item_name'>{item.name}</span>
            <p>{item.text}</p>
            <div className='ratingImg'>
                {
                    item.ratingImg.map((el) => (
                        <div key={el.id} className='star'><img src={el.star} /></div>
                    ))
                }
            </div>
            <span className='rating'>{item.rating}</span>
        </div>
    )
}

export default memo(Item)