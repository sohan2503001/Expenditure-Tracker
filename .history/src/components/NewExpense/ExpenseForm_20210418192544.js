import React, { useState, UseState } from 'react';
import './ExpenseForm.css'

const ExpenseForm = () => {
    const [enteredTitle, setEnteredTitle] = useState('');
    const [enteredAmount, setEnteredAmount] = useState('');

    const titleChanegHandler =(event) => {
        setEnteredTitle(event.target.value);
    };

    const amountChanegHandler =(event) => {
        setEnteredAmount(event.target.value);
    };

    return <form>
        <div className="new-expense__controls">
            <div className="new-expense__control">
                <label>Title</label>
                <input type="text" onChange={titleChanegHandler} />
            </div>
        </div>
        <div className="new-expense__controls">
            <div className="new-expense__control">
                <label>Amount</label>
                <input type="number" min="0.01" step="0.01" onChange={amountChanegHandler} />
            </div>
        </div>
        <div className="new-expense__controls">
            <div className="new-expense__control">
                <label>Date</label>
                <input type="date" min="2001-01-01" max="2025-12-31" onChange={dateChanandler}/>
            </div>
        </div>
        <div className="new-expense__actions">
            <button type="submit">Add Expense</button>
        </div>
    </form>
};

export default ExpenseForm;