import './ExpensiveItem.css'

function ExpenseItem(props) {
    const month = props.date.toLocaleString('en-US', {month: 'long'})
    c

    return (
        <div className="expense-item">
            <div>
            <div>{month}</div>
            <div>{}</div>
            <div>{}</div>
            </div>
            
            <div>{expenseDate.toISOString()}</div>
            <div className="expense-item__description">
                <h2 className="expense-item h2">{expenseTitle}</h2>
                <div className="expense-item__price">{expenseAmount}</div>
            </div>
        </div>
    );
}

export default ExpenseItem