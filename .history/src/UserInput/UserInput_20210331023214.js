import React from 'react';

const userInput = (props) => {
    const style = {
        
    };

    return (
        <input type="text" 
        onChange={props.changed} 
        value={props.value}></input>
    )
};

export default userInput;
