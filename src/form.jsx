import React, { useState } from 'react'

const Form = (props) => {
    const [name,setname]=useState("")
    function handlechange(event){
        setname(event.target.value)
    }
    function handlesubmit(event){
        event.preventDefault();
        props.onSubmit(name);
    }
  return (
    <div>
        <form onSubmit={handlesubmit}>
            <input type="text" value={name} onChange={handlechange} />
            <button type="submit">Submit</button>
        </form>
    </div>
  )
}

export default Form