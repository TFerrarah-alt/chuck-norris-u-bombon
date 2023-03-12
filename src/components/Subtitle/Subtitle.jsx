import React from 'react';
import './Subtitle.css';

function Subtitle({subtitle, size}) {
    return (
        <h2 style={{fontSize: size}} >{subtitle}</h2>
    );
}

export default Subtitle;