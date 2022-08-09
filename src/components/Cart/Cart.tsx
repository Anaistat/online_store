import React from 'react';
import style from './Cart.module.sass'
import CartItem from "./CartItem/CartItem";
import Products from "../../store/Products";

const Cart = () => {
    return (
        <div className={style.cart}>
            <h1 className={style['cart__title']}>cart</h1>
            <div className={style['cart__item']}>
                {
                    Products.productsAndAmount.map((e)=><CartItem product={e[0]} amount={e[1]}/>)
                }
            </div>
        </div>
    );
};

export default Cart;