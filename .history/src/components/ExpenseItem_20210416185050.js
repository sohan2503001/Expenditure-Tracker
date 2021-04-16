import './ExpensiveItem.css'
import './'

function ExpenseItem(props) {
    

    return (
        <div className="expense-item">
            <div>
            <div>{month}</div>
            <div>{year}</div>
            <div>{day}</div>
            </div>

            <div className="expense-item__description">
                <h2 className="expense-item h2">{props.title}</h2>
                <div className="expense-item__price">{props.amount}</div>
            </div>
        </div>
    );
}

export default ExpenseItem