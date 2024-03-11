import React from 'react';
import ProductDate from './ProductDate'

import './ProductItem.css'

export default function ProductItem(props) {
    return (
        <div className='product-item'>
            <ProductDate date={props.date}></ProductDate>
            <div className='product-item-desc'>
                <h2>{props.title}</h2>
            </div>
        </div>
    );
}