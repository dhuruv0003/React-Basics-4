import { useState } from 'react'
import './ProductForm.css'

export default function ProductForm() {
    const ob={
        title:'',
        date:''
    } 
    let [input,setinput]=useState(ob)
    function changehandler(event){
        setinput({...input,title:event.target.value})
        
    }
    return (
        <form action="">
            
            <div className="new-product-form">
            <div className="form-container"><div className="new-product-title">
                    <label htmlFor="title">Title</label>
                    <input type="text" name="title" onChange={changehandler} />{input.title}
                </div>
                <div className="new-product-date">
                    <label htmlFor="date">Date</label>
                    <input type="date" name="date" min='2023-01-01' max='2023-12-12' />
                </div></div>

                <div className="new-product-btn">
                    <button type="submit">Add Product</button>
                </div>
            </div>
        </form>

    )
} 