import React from 'react';
import style from './Product.module.sass'
import image1 from '../Category/ProductCard/images/Image.png'
import Button from "../ui/Button/Button";

const Product = () => {
    return (
        <div className={style['product']}>
            <div className={style['product__photos']}>
                {
                    Array(3).fill(0).map((e, index)=>
                        <img
                            src={image1}
                            key={index}
                            alt="img1"
                            width='80'
                            height='80'
                            className={style['product-mini']}
                    />)
                }
            </div>
            <img src={image1} alt="product-main" width='610' height='510' className={style['product__main-photo']}/>
            <div className={style['product-info']}>
                <h1 className={style['product-info__title']}><b>Apollo</b> Running Short</h1>
                <p className={style['product-info__block-title']}>size:</p>
                <ul className={style['product-info__sizes']}>
                    <li className={style.size}>XS</li>
                    <li className={style.size}>S</li>
                    <li className={style.size}>M</li>
                    <li className={style.size}>L</li>
                </ul>
                <p className={style['product-info__block-title']}>price:</p>
                <h2 className={style['product-info__price']}>$50.00</h2>
                <Button
                    title='add to cart'
                    outline='none'
                    color='#ffffff'
                    backgroundColor='var(--main-color-green)'
                    link='/'
                />
                <p className={style['product-info__info']}>
                    Find stunning women's cocktail dresses and party dresses.
                    Stand out in lace and metallic cocktail dresses and party
                    dresses from all your favorite brands.
                </p>
            </div>
        </div>
    );
};

export default Product;