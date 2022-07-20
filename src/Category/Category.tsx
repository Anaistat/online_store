import React from 'react';
import style from './Category.module.sass'
import image1 from '../Category/ProductCard/images/Image.png'
import image2 from '../Category/ProductCard/images/Image1.png'
import image3 from '../Category/ProductCard/images/Image2.png'
import ProductCard from "./ProductCard/ProductCard";
import {Link} from "react-router-dom";

const Category = () => {
    return (
        <div className={style.category}>
            <h1 className={style['category__name']}>Category name</h1>
            <div className={style['category__products']}>
                <Link to='product/1'>
                    <ProductCard product='Apollo Running Short' price='$50' image={image1} isOutOfStock={false}/>
                </Link>
                <ProductCard product='Apollo Running Short' price='$50' image={image2} isOutOfStock={false}/>
                <ProductCard product='Apollo Running Short' price='$50' image={image3} isOutOfStock={true}/>
                <ProductCard product='Apollo Running Short' price='$50' image={image3} isOutOfStock={false}/>
                <ProductCard product='Apollo Running Short' price='$50' image={image2} isOutOfStock={false}/>
                <ProductCard product='Apollo Running Short' price='$50' image={image1} isOutOfStock={false}/>
            </div>
        </div>
    );
};

export default Category;