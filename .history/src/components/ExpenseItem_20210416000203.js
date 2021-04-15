import './ExpensiveItem.css'

function ExpenseItem() {
    return (
        <div className="expense-item">
            <div>March 28th 2021</div>
            <div className=".expense-item__description">
                <h2 className=".expense-item h2">car Insurance</h2>
                <div>$294.54</div>
            </div>
        </div>
    );
}

export default ExpenseItem