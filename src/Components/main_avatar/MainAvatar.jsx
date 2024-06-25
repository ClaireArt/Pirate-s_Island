import React, { useRef, useState, useEffect, useMemo } from 'react';
import './MainAvatar.css';
import { avatar } from '../../DataFolder/Data';
import Item from './Item';
import { Rainbow } from '../../Images/Images';
import { memo } from 'react';

function MainAvatar() {
    const [viewitem, setViewItem] = useState(false);
    const avatarRef = useRef(null);

    useEffect(() => {

        window.addEventListener('scroll', (e) => {
            if (window.scrollY >= avatarRef.current.offsetTop) {
                setViewItem(true)
            }
        })

    }, [])

    return (
        <div className='main_avatar' style={{ backgroundImage: `url(${Rainbow})` }} ref={avatarRef}>
            <h1>Отзывы и оценки</h1>
            {viewitem &&
                <div className='avatar_box'>
                    {
                        avatar.map((el) => {
                            return <Item key={el.id} item={el} />
                        })
                    }
                </div>}
        </div>
    )
}

export default memo(MainAvatar)