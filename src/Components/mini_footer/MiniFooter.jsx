import React, { memo } from 'react';
import './MiniFooter.css';

function MiniFooter() {
    return (
        <div className='footer_mini'>
            <span>© 2035 Pirate's Island. Сайт создан на <a href="https://ru.wix.com/website-template/view/html/2967?originUrl=https%3A%2F%2Fru.wix.com%2Fwebsite%2Ftemplates%3Fcriteria%3Dgame&tpClick=view_button&esi=0c705254-253a-46f3-9a96-352366067525" target="_blank" >Wix.com</a></span>
        </div>
    )
}

export default memo(MiniFooter)