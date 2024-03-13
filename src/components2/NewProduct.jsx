import './NewProduct.css'
import ProductForm from './ProductForm'

export default function NewProduct(props){
    function onnewsubmithandler(data){
        console.log("Iniside newproduct");
        console.log(data);
        // parent ke props me data ko bhj diya 
        props.onsubmit(data)
    }
    //onnewsubmit apne chaild se data fetch karega
    return (
        <div className="new-product">
            <ProductForm onnewsubmit={onnewsubmithandler}/>
        </div>
    )
}