import React from 'react';

const userInput = (props) => {
    return(
        
            <input type="text" onchange={props.changed}></input>
        </div>
    )
};

export default userInput;