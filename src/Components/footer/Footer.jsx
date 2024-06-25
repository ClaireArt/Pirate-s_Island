import React, { memo, useState } from 'react';
import './Footer.css';
import FooterPirate from '../footer_pirate/FooterPirate';
import FooterContact from '../footer_contact/FooterContact';
import FooterInput from '../footer_input/FooterInput';

function Footer() {
    const [color, setColor]=useState('var(--blue-color)');
    const [opacity, setOpacity]=useState(1);

    return (
        <footer>
            <div className='container'>
                <section className='footer'>
                    <FooterPirate color={setColor} opacity={setOpacity}/>
                    <FooterContact color={setColor} opacity={setOpacity}/>
                    <FooterInput color={setColor} opacity={setOpacity}/>
                </section>
            </div>
        </footer>
    )
}

export default memo(Footer)