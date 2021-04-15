import React from 'react';

const userInput = (props) => {
    const style = {
        border: '2px solid red'
        textalign
    };

    return (
        <input type="text" 
        style={style}
        onChange={props.changed} 
        value={props.value}></input>
    )
};

export default userInput;
