import React, {FC, useState} from 'react';
import style from './CartItem.module.sass'
import Product from "../../../types";

interface CartItemProps{
    product: Product
    amount: number
}

const CartItem:FC<CartItemProps> = ({product, amount}) => {

    const [itemsCount, setItemsCount] = useState<number>(amount)
    const [activeSize, setActiveSize] = useState<string>('')

    return (
        <div className={style['cart-item']}>
            <div>
                <b>{product.name.split(' ')[0]}</b>
                <h1 className={style['cart-item__title']}>
                    {product.name.split(' ').splice(1).join(' ')}
                </h1>
                <p className={style['cart-item__price']}>${product.price}</p>
                <ul className={style['cart-item__sizes']}>
                    {
                        product.sizes.map(size=>
                            <li
                                className={[style.size , size === activeSize?style['size--active']:''].join(' ')}
                                key={size}
                                onClick={()=>setActiveSize(size)}
                            >
                                {size}
                            </li>)
                    }
                </ul>
            </div>
            <div className={style['count-and-image']}>
                <div className={style['count-and-image__count']}>
                    <button
                        className={style['count-button']}
                        onClick={()=>setItemsCount(prev=>prev + 1)}>
                        +
                    </button>
                    <input
                        type="text"
                        inputMode='numeric'
                        pattern='*'
                        className={style['count-input']}
                        value={itemsCount}
                        onChange={e=>setItemsCount(+e.target. value)}/>
                    <button
                        className={style['count-button']}
                        onClick={()=>setItemsCount(prev=>prev === 0?prev:prev - 1)}>
                        -
                    </button>
                </div>
                <img className={style['count-and-image__image']} src={product.images[0]} alt="item1" width='140' height='185'/>
            </div>
        </div>
    );
};

export default CartItem;