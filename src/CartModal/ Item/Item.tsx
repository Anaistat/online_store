import React, {FC} from 'react';
import style from './Item.module.sass'

interface ItemProps{
    name: string
    price: string
    image: string
    sizes: string[]
}

const Item:FC<ItemProps> = ({name, price, image, sizes}) => {
    return (
        <div className={style.item}>
            {/*<div className={style['item__info']}>*/}
            {/*    <p className={style['name']}>{name}</p>*/}
            {/*    <p className={style['price']}>{price}</p>*/}
            {/*</div>*/}
            {/*<div className={style['item__count']}>*/}

            {/*</div>*/}
            {/*<div>*/}
            {/*    <img src={image} alt="item" width='105' height='137'/>*/}
            {/*</div>*/}


            <div className={style['item__info']}>
                <p className={style['name']}>{name}</p>
                <p className={style['price']}>{price}</p>
            </div>
            <div className={style['item__sizes']}>
                <ul className={style['sizes-list']}>
                    {
                        sizes.map(size=><li key={size} className={style['sizes-list__size']}>{size}</li>)
                    }
                </ul>
            </div>
            <div className={style['item__count']}>
                <button className={style['count-button']}>+</button>
                <input type="text" className={style['count-input']}/>
                <button className={style['count-button']}>-</button>
            </div>
            <div className={style['item__image']}>
                <img src={image} alt="item" width='105' height='137'/>
            </div>
        </div>
    );
};

export default Item;