import React from 'react';
import './Footer.css';
import Paragraph from '../Paragraph/Paragraph';

function Footer(props) {
    return (
        <div className='footer'>
            Ti aspettavi un footer, vero? Beccati sta papera 🦆
            <span className="credit">Made by <a href="https://github.com/tferrarah">T_Ferrarah</a></span>
        </div>
    );
}

export default Footer;