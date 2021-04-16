import './ExpenseDate'

function ExpenseDate(props) {
    const month = props.date.toLocaleString('en-US', { month: 'long' })
    const day = props.date.toLocaleString('en-US', { day: '2-digit' })
    const year = props.date.getFullYear();

    return (
        <div className="expense-Date">
            <div className="expense-Date_month">{month}</div>
            <div className="expense-Date_year">{year}</div>
            <div className="expense-Date">{day}</div>
        </div>
    );
}

export default ExpenseDate;