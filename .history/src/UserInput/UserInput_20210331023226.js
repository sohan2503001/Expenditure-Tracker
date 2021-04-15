import React from 'react';

const userInput = (props) => {
    const style = {
        border: '2px solid red'
    };

    return (
        <input type="text" 
        onChange={props.changed} 
        value={props.value}></input>
    )
};

export default userInput;
