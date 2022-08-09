import React, {FC, useEffect, useState} from 'react';
import style from './Item.module.sass'
import Products from "../../../store/Products";
import Product from "../../../types";

interface Item{
    product: Product
}

const Item:FC<Item> = ({product}) => {

    const [itemsCount, setItemsCount] = useState<number>(1)
    const [activeSize, setActiveSize] = useState<string>('S')
    useEffect(()=>{
        Products.changeItemAmount(product.name, itemsCount)
    }, [itemsCount])

    return (
        <div className={style.item}>
            <div className={style['item__info']}>
                <p className={style['name']}>{product.name}</p>
                <p className={style['price']}>${product.price}</p>
            </div>
            <div className={style['item__sizes']}>
                <ul className={style['sizes-list']}>
                    {
                        product.sizes.map(size=>
                            <li key={size}
                                className={[style['sizes-list__size'], size === activeSize?style['sizes-list__size--active']:''].join(' ')}
                                onClick={()=>setActiveSize(size)}
                            >
                                {size}
                            </li>)
                    }
                </ul>
            </div>
            <div className={style['item__count']}>
                <button className={style['count-button']} onClick={()=>setItemsCount(prev=>prev + 1)}>+</button>
                <input
                    type="text"
                    inputMode='numeric'
                    pattern='[0-9]+'
                    className={style['count-input']}
                    value={itemsCount}
                    onChange={e=>setItemsCount(+e.target.value)}/>
                <button className={style['count-button']} onClick={()=>setItemsCount(prev=>prev === 0?prev:prev - 1)}>-</button>
            </div>
            <div className={style['item__image']}>
                <img src={product.images[0]} alt="item" width='105' height='137'/>
            </div>
        </div>
    );
};

export default Item;