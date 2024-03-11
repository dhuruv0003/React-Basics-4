import './Item.css'

export default function Item(props){
    return(
        <div className="item">
            <h2>{props.firstname}</h2>
          
            {/* {props.children} */}
        </div>
    )
}