import './ItemDate.css'

export default function ItemDate(props) {
    return (
        <div className='ItemDate'>
            <h2>{props.day}</h2>
            <h2>{props.month}</h2>
            <h2>{props.year}</h2>
        </div>
    );
}