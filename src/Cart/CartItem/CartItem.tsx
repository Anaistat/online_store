import React, {FC, useState} from 'react';
import style from './CartItem.module.sass'

interface CartItemProps{
    images: string[]
    title: string
    sizes: string[]
    price: string
}

const CartItem:FC<CartItemProps> = ({images, sizes, title, price}) => {

    const [itemsCount, setItemsCount] = useState<number>(0)

    return (
        <div className={style['cart-item']}>
            <div>
                <b>{title.split(' ')[0]}</b>
                <h1 className={style['cart-item__title']}>
                    {title.split(' ').splice(1).join(' ')}
                </h1>
                <p className={style['cart-item__price']}>{price}</p>
                <ul className={style['cart-item__sizes']}>
                    {
                        sizes.map(size=><li className={style.size} key={size}>{size}</li>)
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
                        onChange={e=>setItemsCount(+e.target.value)}/>
                    <button
                        className={style['count-button']}
                        onClick={()=>setItemsCount(prev=>prev === 0?prev:prev - 1)}>
                        -
                    </button>
                </div>
                <img className={style['count-and-image__image']} src={images[0]} alt="item1" width='140' height='185'/>
            </div>
        </div>
    );
};

export default CartItem;