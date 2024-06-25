import React, { useState, useEffect } from 'react';
import './Nav.css';
import { comment, facebook, logo, robot, youtube } from '../../Images/Images';
import { memo } from 'react';

function Nav() {
    const [display, setDisplay] = useState(false);
    const [del, setDel] = useState(false);

    useEffect(() => {
        setTimeout(() => {
            setDisplay(true)
        }, 1000)
    }, [])

    const deleteClick = () => {
        setDel(true);
    }

    return (
        <nav>
            <div className='container'>
                <section className='nav'>
                    {display && <div className='sale' style={{ display: del ? 'none' : 'block'}}>
                        <div className="delete" onClick={() => deleteClick()}><span>x</span></div>
                        <span>Sale for all Games -50%</span>
                    </div>}
                    <div className='nav_logo_menu'>
                        <div className='nav_logo'><img src={logo} /></div>
                        <span>Pirate's Island</span>
                    </div>
                    <div className='nav_icon_menu'>
                        <span>Контакты</span>
                        <div className="nav_icon" ><img src={comment} /></div>
                        <div className="nav_icon" ><img src={facebook} /></div>
                        <div className="nav_icon" ><img src={robot} /></div>
                        <div className="nav_icon" ><img src={youtube} /></div>
                    </div>
                </section>
            </div>
        </nav>
    )
}

export default memo(Nav)