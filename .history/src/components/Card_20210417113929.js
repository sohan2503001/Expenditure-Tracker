import './Card';

function Card(props) {
    return(
        <div className="card">{props.children}</div>
    )
}

export default Card;