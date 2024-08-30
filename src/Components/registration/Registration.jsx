import React, { useState } from 'react';
import { memo } from 'react';
import './Registration.css';
import { number, month } from '../../DataFolder/Data';
import axios from 'axios';

function Registration({ registr, setRegistr }) {
    const startYear = 1905;
    const endYear = 2024;
    const years = Array.from({ length: endYear - startYear + 1 }, (elem, index) => startYear + index);

    const handlesubmit = async (e) => {
        e.preventDefault();
        const obj = {
            names: e.target[0].value,
            surname: e.target[1].value,
            mail: e.target[2].value,
            password: e.target[3].value,
        }

        const res = await axios.post('https://659cfbcd633f9aee79085671.mockapi.io/posts', obj)
        console.log(res, 'ola');
    }



    return (
        <div className='registration'>
            <div className='registr_logo'>
                <div className='registr_logo_text'>
                    <h1>Регистрация</h1>
                    <span>Быстро и легко.</span>
                </div>
                <div className='registr_logo_delete' onClick={() => setRegistr(false)}>x</div>
            </div>
            <div className='registr_border'></div>
            <form onSubmit={handlesubmit}>
                <div className='registr_input'>
                    <input type="text" placeholder='Имя' autoComplete="off" required />
                    <input type="text" placeholder='Фамилия' autoComplete="off" required />
                </div>
                <input type="text" placeholder='Номер мобильного телефона или эл. адрес' autoComplete="off" required />
                <input type="text" placeholder='Новый пароль' autoComplete="off" required />
                <span>Дата рождения</span>
                <div className='birth_date'>
                    <select>
                        {number.map((el, index) => (
                            <option key={index}>{el}</option>
                        ))}
                    </select>
                    <select>
                        {
                            month.map((el, index) => (
                                <option key={index}>{el}</option>
                            ))
                        }
                    </select>
                    <select>
                        {
                            years.map((el, index) => (
                                <option key={index}>{el}</option>
                            ))
                        }
                    </select>
                </div>
                <span>Пол</span>
                <div className='gender'>
                    <div>
                        <span>Женщина</span>
                        <input type="radio" name="gender" />
                    </div>
                    <div>
                        <span>Мужчина</span>
                        <input type="radio" name="gender" />
                    </div>
                    <div>
                        <span>Другое</span>
                        <input type="radio" name="gender" />
                    </div>
                </div>
                <button className='reg'>Регистрация</button>
            </form>
        </div>
    )
}

export default memo(Registration)