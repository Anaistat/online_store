import React, {FC} from 'react';
import style from './CartModal.module.sass'
import Item from "./ Item/Item";
import Button from "../../ui/Button/Button";
import Products from "../../store/Products";
import {observer} from "mobx-react-lite";

interface CartProps{
    isOpen: boolean
    setIsOpen: (isOpen: boolean) => void
    className?: string
}

const CartModal:FC<CartProps> = observer(({isOpen, setIsOpen, className}) => {

    const classes = [style.modal, className]
    if(isOpen){
        classes.push(style['modal--opened'])
    }

    return (
        <div className={classes.join(' ')} onClick={()=>setIsOpen(false)}>
            <div className={style['cart']} onClick={e=>e.stopPropagation()}>
                <h1 className={style['cart__bag']}>My bag,
                    <span className={style['cart__items']}> {Products.products.length} item(s)</span>
                </h1>
                {
                    (Products.products).map(e=>
                        <Item product={e}/>)
                }
                <div className={style.total}>
                    <h2 className={style['total__title']}>Total</h2>
                    <p className={style['total__price']}>${Products.totalPrice}</p>
                </div>
                <ul className={style.buttons}>
                    <li>
                        <Button
                            title='view bag'
                            outline='1px solid var(--main-color-dark)'
                            color='var(--main-color-dark)'
                            backgroundColor='#ffffff'
                            link='/cart'
                            onClick={()=>setIsOpen(false)}
                        />
                    </li>
                    <li>
                        <Button
                            title='check out'
                            outline='none'
                            color='#ffffff'
                            backgroundColor='var(--main-color-green)'
                            link='/'
                        />
                    </li>
                </ul>
            </div>
        </div>
    );
});

export default CartModal;