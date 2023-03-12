import React from 'react';
import './Title.css';

function Title({title, size}) {
    return (
        <h1 style={{fontSize: size}} >{title}</h1>
    );
}

export default Title;