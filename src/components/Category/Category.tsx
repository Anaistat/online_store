import React from 'react';
import style from './Category.module.sass'
import image1 from './ProductCard/images/Image.png'
import image2 from './ProductCard/images/Image1.png'
import image3 from './ProductCard/images/Image2.png'
import image4 from './ProductCard/images/image3.png'
import ProductCard from "./ProductCard/ProductCard";

const Category = () => {


    return (
        <div className={style.category}>
            <h1 className={style['category__name']}>Category name</h1>
            <div className={style['category__products']}>
                <ProductCard product={{
                    name: 'Apollo Running Short',
                    price: 50,
                    images: [image1],
                    description: '',
                    sizes: ['S', 'M']
                }} isOutOfStock={false}/>
                <ProductCard product={{
                    name: 'Apollo Running Sweater',
                    price: 70,
                    images: [image2],
                    description: '',
                    sizes: ['S', 'M']
                }} isOutOfStock={false}/>
                <ProductCard product={{
                    name: 'Apollo Running Glasses',
                    price: 20,
                    images: [image4],
                    description: '',
                    sizes: ['S', 'M']
                }} isOutOfStock={false}/>
                <ProductCard product={{
                    name: 'Apollo Running Jacket',
                    price: 120,
                    images: [image3],
                    description: '',
                    sizes: ['S', 'M']
                }} isOutOfStock={true}/>
            </div>
        </div>
    );
};

export default Category;