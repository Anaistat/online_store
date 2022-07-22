import React from 'react';
import style from './Cart.module.sass'
import item1 from '../Category/ProductCard/images/Image.png'
import item2 from '../Category/ProductCard/images/image3.png'
import CartItem from "./CartItem/CartItem";

const Cart = () => {
    return (
        <div className={style.cart}>
            <h1 className={style['cart__title']}>cart</h1>
            <div className={style['cart__item']}>
                <CartItem images={[item1]} sizes={['S', 'M']} title='Apollo Running Short' price='$50.00'/>
                <CartItem images={[item2]} sizes={['S', 'M']} title='Jupiter Wayfarer' price='$75.00'/>
            </div>
        </div>
    );
};

export default Cart;