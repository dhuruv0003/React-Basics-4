
import { useState } from 'react';
import ProductDate from './ProductDate'

import './ProductItem.css'

export default function ProductItem(props) {

    
    let [title,setTitle]=useState(props.title)

    function Handleclick(){
        setTitle("Popcorn")
        console.log("Button was clicked");
    }
    return (
        <div className='product-item'>
            <ProductDate date={props.date}></ProductDate>
            <div className='product-item-desc'>
                <h2>{title}</h2>
            </div>
            <button onClick={Handleclick}>Add To Cart</button>
        </div>
    );
}