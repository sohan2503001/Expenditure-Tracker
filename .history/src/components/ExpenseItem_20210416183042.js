import './ExpensiveItem.css'

function ExpenseItem(props) {
    const expenseDate = new Date(2021, 2, 28);
    const expenseTitle = 'Car Insurance';
    const expenseAmount = 294.57;

    return (
        <div className="expense-item">
            <div>
            <div>{props.date.toLocaleString()}</div>
            <div></div>
            <div></div>
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