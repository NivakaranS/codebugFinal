
import React from 'react';
import './Button1.css';

const Button1 = ({ButtonName, ButtonFunction}) => {
    return (
        <button onClick={ButtonFunction} className="boton-elegante">{ButtonName}</button>
    )
}

export default Button1;