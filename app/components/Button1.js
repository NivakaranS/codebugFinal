
import React from 'react';
import './Button1.css';

const Button1 = ({ButtonFunction}) => {
    return (
        <button onClick={ButtonFunction} className="boton-elegante">Login</button>
    )
}

export default Button1;