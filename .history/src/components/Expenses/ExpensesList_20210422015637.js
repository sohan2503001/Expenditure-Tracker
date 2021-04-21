import React from 'react';
import './ExpensesList'
import ExpenseItem from './ExpenseItem'

const ExpensesList = props => {
    let expensesContent = <p>No expenses found.</p>;

    if (props.length.length > 0) {
        expensesContent = filteredExpenses.map(expense => (
            <ExpenseItem
                key={expense.id}
                title={expense.title}
                amount={expense.amount}
                date={expense.date}
            />
        ))
    }
};

export default ExpensesList;
