import React from 'react';
import './Button.css';

function Button({value, onClick, disabled, width, size}) {
    return (
        <button className="btn" style={{fontSize: (size == "large" ? "2rem" : "1.2rem"),width: width, opacity: disabled && 0.4, cursor: disabled ? 'default' : 'pointer'}} onClick={onClick}>
            {value}
        </button>
    );
}

export default Button;