import React from 'react';
import ExpenseForm from './ExpenseForm';
import './NewExpense.css';

const NewExpense = () => {
    return <div className="new-expense">
        <form>
            <ExpenseForm></ExpenseForm>
        </form>
        <div className="new-expense_actions">
            <button type="submit">Add Expense</button>
        </div>
    </div>
};

export default NewExpense;