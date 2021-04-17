import './Card';

function Card(props) {
    const classes = 'card + props.'
    return(
        <div className="card">{props.children}</div>
    )
}

export default Card;