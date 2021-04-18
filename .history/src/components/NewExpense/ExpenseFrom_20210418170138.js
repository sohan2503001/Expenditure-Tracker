import React from 'react';
import './ExpenseForm'

const ExpenseForm = () => {
    return <form>
        <div className="new-expense_controls">
            <div className="new-expense_control">
                <label>Title</label>
                <input type="text" />
            </div>
        </div>
        <div className="new-expense_controls">
            <div className="new-expense_control">
                <label>Amount</label>
                <input type="number" min="0.01" step="0.01" />
            </div>
        </div>
    </form>
};

export default ExpenseForm;