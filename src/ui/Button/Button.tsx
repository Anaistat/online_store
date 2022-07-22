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
    onClick?: (e:React.MouseEvent<HTMLButtonElement>) => void
}

const Button:FC<ButtonProps> = ({
    title,
    outline,
    color,
    link,
    className,
    backgroundColor,
    onClick}) => {
    return (
        <Link to={link}>
            <button onClick={onClick} className={[style.button, className].join(' ')} style={{
                backgroundColor: backgroundColor,
                outline: outline,
                color: color
            }}>{title}</button>
        </Link>
    );
};

export default Button;