import React, { memo } from 'react';
import './FooterContact.css';

function FooterContact() {
  return (
    <div className='footer_contact'>
      <div className='contacts'>
        <h1>Связаться</h1>
        <span>+7 123-456-7890</span>
        <span>info@mysite.ru</span>
        <span>ул. Арбат, 1а, Москва,</span>
        <span>119019, Россия</span>
      </div>
      <div className='contacts_menu'>
        <h1>Меню</h1>
        <span>Главная</span>
        <span>Конфиденциальность</span>
        <span>Условия использования</span>
      </div>
    </div>
  )
}

export default memo(FooterContact)