import './Card';

function Card() {
    return(
        <div className="card">{props.children}</div>
    )
}

export default Card;