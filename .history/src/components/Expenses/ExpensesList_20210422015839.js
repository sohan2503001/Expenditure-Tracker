import React from 'react';
import './ExpensesList'
import ExpenseItem from './ExpenseItem'

const ExpensesList = props => {
    let expensesContent = <p>No expenses found.</p>;

    if (props.items.length > 0) {
        expensesContent = props.items.map(expense => (
            <ExpenseItem
                key={expense.id}
                title={expense.title}
                amount={expense.amount}
                date={expense.date}
            />
        ))
    }

    return <ul></ul>
};

export default ExpensesList;
