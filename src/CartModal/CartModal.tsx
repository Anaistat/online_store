import React, {FC} from 'react';
import style from './CartModal.module.sass'
import Item from "./ Item/Item";
import item1 from '../Category/ProductCard/images/Image.png'
import item2 from'../Category/ProductCard/images/image3.png'
import Button from "../ui/Button/Button";

interface CartProps{
    isOpen: boolean
    setIsOpen: (isOpen: boolean) => void
    className?: string
}

const CartModal:FC<CartProps> = ({isOpen, setIsOpen, className}) => {

    const classes = [style.modal, className]
    if(isOpen){
        classes.push(style['modal--opened'])
    }

    return (
        <div className={classes.join(' ')} onClick={()=>setIsOpen(false)}>
            <div className={style['cart']}>
                <h1 className={style['cart__bag']}>My bag,
                    <span className={style['cart__items']}> 2 items</span>
                </h1>
                <Item name='Apollo Running Short' price='$ 50.00' image={item1} sizes={['S', 'M']}/>
                <Item name='Jupiter Wayfarer' price='$ 50.00' image={item2} sizes={['S', 'M']}/>
                <div className={style.total}>
                    <h2 className={style['total__title']}>Total</h2>
                    <p className={style['total__price']}>$100.00</p>
                </div>
                <ul className={style.buttons}>
                    <li>
                        <Button
                            title='view bag'
                            outline='1px solid var(--main-color-dark)'
                            color='var(--main-color-dark)'
                            backgroundColor='#ffffff'
                            link='/'
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
};

export default CartModal;