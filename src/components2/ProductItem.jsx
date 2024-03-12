
import ProductDate from './ProductDate'

import './ProductItem.css'

export default function ProductItem(props) {
    function Handleclick(){
        console.log("Button was clicked");
    }
    return (
        <div className='product-item'>
            <ProductDate date={props.date}></ProductDate>
            <div className='product-item-desc'>
                <h2>{props.title}</h2>
            </div>
            <button onClick={Handleclick}>Add To Cart</button>
        </div>
    );
}