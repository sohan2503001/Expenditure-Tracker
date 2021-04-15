import React from 'react';

const userInput = (props) => {
    return(
        
            <input type="text" onchange={props.changed}></input>
       
    )
};

export default userInput;