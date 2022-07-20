import React, {FC} from 'react';
import style from './Buttom.module.sass'
import {Link} from "react-router-dom";

interface ButtonProps{
    title: string
    outline: string
    color: string
    backgroundColor: string
    link: string
    className?: string
}

const Button:FC<ButtonProps> = ({title, outline, color, link, className, backgroundColor}) => {
    return (
        <Link to={link}>
            <button className={[style.button, className].join(' ')} style={{
                backgroundColor: backgroundColor,
                outline: outline,
                color: color
            }}>{title}</button>
        </Link>
    );
};

export default Button;