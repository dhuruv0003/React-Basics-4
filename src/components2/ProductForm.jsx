import { useState } from 'react'
import './ProductForm.css'

export default function ProductForm(props) {
    // let ob = {
    //     newtitle: "",
    //     newdate: ""
    // }
    // let [input, setinput] = useState(ob)
    // function titlehandler(event) {
    //     setinput({ ...input, newtitle: event.target.value })
    //    
    // }
    // function datehandler(event) {
    //     setinput((newdate) => {
    //         return ({ ...newdate, newdate: event.target.value })
    //     })  
    // }
    const[newtitle,settitle]=useState("");
    const[newdate,setdate]=useState("");

    function titlehandler(event){
        settitle(event.target.value)
    }
    function datehandler(event){
        setdate(event.target.value)
    }


    function submithandle(event) {
        event.preventDefault();
        const obj = {
            title: newtitle,
            date: newdate
        }
        // parent ke props me data ko bhj diya 
        props.onnewsubmit(obj);

    //After adding we want to have empty input again
    //so to do this setrmpty to both
        setdate("");
        settitle("")
    }
    return (
        <form action="" onSubmit={submithandle}>

            <div className="new-product-form">
                <div className="form-container"><div className="new-product-title">
                    <label htmlFor="title">Title</label>
                    <input type="text" value={newtitle}name="title" onChange={titlehandler} />
                </div>
                    <div className="new-product-date">
                        <label htmlFor="date">Date</label>
                        <input type="date" name="date" min='2023-01-01' max='2023-12-12' value={newdate} onChange={datehandler} />
                    </div></div>

                <div className="new-product-btn">
                    <button type="submit">Add Product</button>
                </div>
            </div>
        </form>

    )
} 