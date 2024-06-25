import React, { useState, useEffect, memo, useRef } from 'react';
import './Game.css';
import { Item1, Scull } from '../../Images/Images';

function Game() {
    const gameRef = useRef(null);
    const [viewitem, setViewItem] = useState(false);
    const [scrollEnabled, setScrollEnabled] = useState(true);
    const [play, setPlay]=useState('Play');

    useEffect(() => {

        window.addEventListener('scroll', (e) => {
            if (window.scrollY >= gameRef.current.offsetTop) {
                setViewItem(true)
            }
        })

    }, [])

    const [count, setCount] = useState(0);
    const [dur, setDur] = useState({
        top: Math.round(Math.random() * 45) * 10,
        left: 250
    })
    const [pat, setPat] = useState({
        top: 0,
        left: 250
    })
    const [cub, setCub] = useState({
        top: 0,
        left: 0
    });
    const [point, setPoint] = useState({
        top: Math.round(Math.random() * 45) * 10,
        left: Math.round(Math.random() * 17 + 28) * 10,
    })

    useEffect(() => {
        window.addEventListener('keydown', handleKeyDown);
        return () => {
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, [cub]);

    const handleKeyDown = (event) => {

        const key = event.key

        if (key === "ArrowUp" && cub.top !== 0) {
            setCub({
                ...cub,
                top: cub.top - 10
            })
        }
        else if (key === "ArrowDown" && cub.top !== 450) {
            setCub({
                ...cub,
                top: cub.top + 10
            })
        }
        else if (key === "ArrowLeft" && cub.left !== 0 && (cub.left !== pat.left + 30 || cub.top === dur.top)) {
            setCub(
                {
                    ...cub,
                    left: cub.left - 10
                }
            )
        }
        else if (key === "ArrowRight" && cub.left !== 450 && (cub.left !== pat.left - 50 || cub.top === dur.top)) {
            setCub({
                ...cub,
                left: cub.left + 10
            })
        }

        onChange()
    }

    const onChange = () => {
        if (cub.top === point.top && cub.left === point.left) {
            setCount(count + 1)
            setPoint({
                top: Math.round(Math.random() * 45) * 10,
                left: cub.left < pat.left ? Math.round(Math.random() * 17 + 28) * 10 : Math.round(Math.random() * 20) * 10
            })
            console.log('test');
            setDur(
                {
                    ...dur,
                    top: Math.round(Math.random() * 45) * 10,
                }
            )
        }
    }

      
        useEffect(() => {
          const handleScroll = (event) => {
            if (!scrollEnabled) {
              event.preventDefault();
            }
          };
      
          if (!scrollEnabled) {
            document.body.style.overflow = 'hidden';
            document.addEventListener('scroll', handleScroll);
          } else {
            document.body.style.overflow = '';
            document.removeEventListener('scroll', handleScroll);
          }
      
          return () => {
            document.body.style.overflow = '';
            document.removeEventListener('scroll', handleScroll);
          };
        }, [scrollEnabled]);
      
        const toggleScroll = () => {
          setScrollEnabled(!scrollEnabled);
         if(play==='Play') {
            setPlay('Stop')
         }else {
            setPlay('Play')
         }
        };
        
    
    return (
        <div className='game' ref={gameRef}>
            <button className="play" onClick={toggleScroll}>{play}</button>
            {viewitem && <div className='game-block'>
                <div className='cub' style={{ top: cub.top + 'px', left: cub.left + 'px' }}><img src={Scull} /></div>
                <div className='point' style={{ top: point.top + 'px', left: point.left + 'px' }}><img src={Item1} /></div>
                <div className='pat'>
                    <div className='dur' style={{ top: dur.top + 'px' }}></div>
                </div>
            </div>}
            {viewitem && <div>
                <h1>{count}</h1>
            </div>}
        </div>
    )
}

export default memo(Game)