import React from 'react';

const userInput = (props) => {
    return (
        <input type="text" onChange={props.changed}></input>
    )
};

export default userInput;