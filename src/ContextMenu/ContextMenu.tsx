import React, {FC, PropsWithChildren} from 'react';
import style from './ContextMenu.module.sass'

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

    return (
        <div className={classes.join(' ')}>
            {
                children
            }
        </div>
    );
};

export default ContextMenu;