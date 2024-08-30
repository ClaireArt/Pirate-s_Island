import React, { useState } from 'react';
import './FooterInput.css';
import { memo } from 'react';
import Registration from '../registration/Registration';

function FooterInput() {
    const [registr, setRegistr] = useState(false);

    const handleClick = () => {
        setRegistr(true);
    }

    return (
        <div className='footer_input'>
            <div className='footer_content'>
                <h1>Написать нам</h1>
                <form>
                    <section>
                        <div className='input_box'>
                            <label>Имя</label>
                            <input type="text" autoComplete='off' required />
                            <label>Эл. почта*</label>
                            <input type="email" autoComplete='off' required />
                        </div>
                        <div className='input_box'>
                            <label>Фамилия</label>
                            <input type="email" autoComplete='off' required />
                            <label>Тема</label>
                            <input type="text" autoComplete='off' required />
                        </div>
                    </section>
                    <textarea placeholder="Текст сообщения..."></textarea>
                    <div className='but'>
                        <button type='submit'>Отправить</button>
                        <button type='button' onClick={handleClick}>Регистрация</button>
                    </div>
                </form>
            </div>
            <div className='block_content'>{registr && <Registration  {...{ registr, setRegistr }} />}</div>
        </div>
    )
}

export default memo(FooterInput)