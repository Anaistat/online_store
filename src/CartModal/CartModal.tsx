import React from 'react';
import style from './CartModal.module.sass'
import Item from "./ Item/Item";
import item1 from '../Category/ProductCard/images/Image.png'

const CartModal = () => {
    return (
        <div className={style['modal']}>
            <div className={style['cart']}>
                <h2 className={style['cart__bag']}>My bag,
                    <span className={style['cart__items']}> 2 items</span>
                </h2>
                <Item name='Apollo Running Short' price='$ 50.00' image={item1} sizes={['S', 'M']}/>
                {/*<Item name='Jupiter Wayfarer' price='$ 50.00' image={item1} sizes={['S', 'M']}/>*/}
            </div>
        </div>
    );
};

export default CartModal;