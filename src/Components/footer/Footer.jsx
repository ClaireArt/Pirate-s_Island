import React, { memo } from 'react';
import './Footer.css';
import FooterPirate from '../footer_pirate/FooterPirate';
import FooterContact from '../footer_contact/FooterContact';
import FooterInput from '../footer_input/FooterInput';

function Footer() {

    return (
        <footer>
            <div className='container'>
                <section className='footer'>
                    <FooterPirate />
                    <FooterContact />
                    <FooterInput />
                </section>
            </div>
        </footer>
    )
}

export default memo(Footer)