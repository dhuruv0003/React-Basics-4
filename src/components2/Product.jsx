import ProductItem from './ProductItem.jsx'


import './Product.css'
export default function Product(props) {
    return (
        <div className="products">
            <ProductItem title={props.items[0].title}
                price={props.items[0].price} date={props.items[0].date}></ProductItem>
            <ProductItem title={props.items[1].title} price={props.items[1].price} date={props.items[1].date}></ProductItem>
            <ProductItem title={props.items[2].title} price={props.items[2].price} date={props.items[2].date}></ProductItem>
            <ProductItem title={props.items[3].title} price={props.items[3].price} date={props.items[3].date}></ProductItem>
        
        </div>
    )
} 

