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
        <div className="new-expense_controls">
            <div className="new-expense_control">
                <label>Date</label>
                <input type="date" min="2001-01-01" max="2025-12-31" />
            </div>
        </div>
        <div className=""></div>
    </form>
};

export default ExpenseForm;