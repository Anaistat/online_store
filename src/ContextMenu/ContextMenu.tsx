import React, {FC, PropsWithChildren, useRef} from 'react';
import style from './ContextMenu.module.sass'
import {useOnOutsideClick} from "../hooks/useOnOutsideClick";

interface ModalProps extends PropsWithChildren{
    className?: string,
    isOpen: boolean
    setIsOpen: (isOpen:boolean) => void
}

const ContextMenu:FC<ModalProps> = ({
    children,
    className,
    isOpen,
    setIsOpen
}) => {
    const classes = [style.context, className]
    if(isOpen){
        classes.push(style['context--opened'])
    }

    const contextRef = useRef(null)
    // useOnOutsideClick(contextRef, ()=>setIsOpen(false))


    return (
        <div className={classes.join(' ')} ref={contextRef}>
            {
                children
            }
        </div>
    );
};

export default ContextMenu;