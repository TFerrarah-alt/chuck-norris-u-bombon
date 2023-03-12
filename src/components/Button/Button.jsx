import React from 'react';
import './Button.css';

function Button({value, onClick, disabled, width}) {
    return (
        <button className="btn" style={{width: width, opacity: disabled && 0.4, cursor: disabled ? 'default' : 'pointer'}} onClick={onClick}>
            {value}
        </button>
    );
}

export default Button;