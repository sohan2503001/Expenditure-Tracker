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
                <input type="text" />
            </div>
        </div>
    </form>
};

export default ExpenseForm;