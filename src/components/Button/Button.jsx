import React from 'react';
import './Button.css';

function Button({value, onClick, disabled}) {
    return (
        <button className="btn" style={disabled ? {opacity: 0.4} : {}} onClick={onClick}>
            {value}
        </button>
    );
}

export default Button;