import './NewProduct.css'
import ProductForm from './ProductForm'

export default function NewProduct(props){
    function onnewsubmithandler(data){
        console.log("Iniside newproduct");
        props.onsubmit(data)
    }
    return (
        <div className="new-product">
            <ProductForm onnewsubmit={onnewsubmithandler}/>
        </div>
    )
}